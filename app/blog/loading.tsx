export default function BlogLoading() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto h-10 max-w-md animate-pulse rounded-lg bg-surface" />
      <div className="mx-auto mt-4 h-6 max-w-lg animate-pulse rounded-lg bg-surface" />
      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700"
          >
            <div className="aspect-[16/9] animate-pulse bg-surface" />
            <div className="space-y-3 p-5">
              <div className="h-4 w-1/3 animate-pulse rounded bg-surface" />
              <div className="h-6 animate-pulse rounded bg-surface" />
              <div className="h-16 animate-pulse rounded bg-surface" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
