export default function BlogPostLoading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:px-8">
      <div className="h-6 w-32 animate-pulse rounded bg-surface" />
      <div className="mt-8 aspect-[21/9] animate-pulse rounded-3xl bg-surface" />
      <div className="mt-10 h-12 max-w-2xl animate-pulse rounded bg-surface" />
      <div className="mt-4 h-6 w-48 animate-pulse rounded bg-surface" />
      <div className="mt-12 space-y-4">
        <div className="h-4 animate-pulse rounded bg-surface" />
        <div className="h-4 animate-pulse rounded bg-surface" />
        <div className="h-4 w-11/12 animate-pulse rounded bg-surface" />
      </div>
    </div>
  );
}
