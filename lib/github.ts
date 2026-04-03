import { Octokit } from "@octokit/rest";
import githubCacheFallback from "@/content/data/github-cache.json";

export type PinnedRepo = {
  name: string;
  description: string | null;
  stars: number;
  forks: number;
  language: string | null;
  languageColor: string | null;
  updatedAt: string;
  url: string;
};

const PINNED_QUERY = `
  query($login: String!) {
    user(login: $login) {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            stargazerCount
            forkCount
            primaryLanguage { name color }
            updatedAt
            url
          }
        }
      }
    }
  }
`;

async function fetchPinnedGraphQL(
  username: string,
  token: string
): Promise<PinnedRepo[]> {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: PINNED_QUERY, variables: { login: username } }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`GitHub GraphQL failed: ${res.status}`);
  }

  const json = (await res.json()) as {
    data?: {
      user?: {
        pinnedItems?: {
          nodes: Array<{
            name: string;
            description: string | null;
            stargazerCount: number;
            forkCount: number;
            primaryLanguage: { name: string; color: string } | null;
            updatedAt: string;
            url: string;
          } | null>;
        };
      };
    };
    errors?: unknown;
  };

  if (json.errors) {
    throw new Error("GitHub GraphQL returned errors");
  }

  const nodes = json.data?.user?.pinnedItems?.nodes ?? [];
  return nodes
    .filter((n): n is NonNullable<typeof n> => Boolean(n))
    .map((n) => ({
      name: n.name,
      description: n.description,
      stars: n.stargazerCount,
      forks: n.forkCount,
      language: n.primaryLanguage?.name ?? null,
      languageColor: n.primaryLanguage?.color ?? null,
      updatedAt: n.updatedAt,
      url: n.url,
    }));
}

async function fetchReposRestFallback(
  username: string,
  token?: string
): Promise<PinnedRepo[]> {
  const octokit = new Octokit({ auth: token });
  const { data } = await octokit.rest.repos.listForUser({
    username,
    per_page: 10,
    sort: "updated",
  });

  return data.slice(0, 6).map((r) => ({
    name: r.name,
    description: r.description,
    stars: r.stargazers_count ?? 0,
    forks: r.forks ?? 0,
    language: r.language ?? null,
    languageColor: null,
    updatedAt: r.updated_at ?? "",
    url: r.html_url,
  }));
}

export async function getPinnedRepositories(): Promise<PinnedRepo[]> {
  const username =
    process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "octocat";
  const token = process.env.GITHUB_TOKEN;

  try {
    if (token) {
      return await fetchPinnedGraphQL(username, token);
    }
    const octokit = new Octokit();
    const { data } = await octokit.rest.repos.listForUser({
      username,
      per_page: 6,
      sort: "updated",
    });
    return data.map((r) => ({
      name: r.name,
      description: r.description,
      stars: r.stargazers_count ?? 0,
      forks: r.forks ?? 0,
      language: r.language ?? null,
      languageColor: null,
      updatedAt: r.updated_at ?? "",
      url: r.html_url,
    }));
  } catch {
    try {
      if (token) {
        return await fetchReposRestFallback(username, token);
      }
    } catch {
      /* use cache */
    }
    return githubCacheFallback as PinnedRepo[];
  }
}
