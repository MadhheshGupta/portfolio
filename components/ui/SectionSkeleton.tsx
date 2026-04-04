/** Skeleton placeholders for dynamically imported sections (perceived performance). */
export function SectionSkeleton({ variant }: { variant: "about" | "skills" | "projects" | "contact" }) {
  return (
    <section className="scroll-mt-24 py-24" aria-hidden>
      <div className="mx-auto max-w-6xl animate-pulse px-4 sm:px-6 lg:px-8">
        <div className="mx-auto h-9 w-40 rounded-lg bg-white/10 sm:h-10 sm:w-48" />
        <div className="mx-auto mt-3 h-4 max-w-lg rounded bg-white/5" />

        {variant === "about" && (
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="h-4 w-full rounded bg-white/5" />
              <div className="h-4 w-full rounded bg-white/5" />
              <div className="h-4 max-w-[90%] rounded bg-white/5" />
              <div className="mt-8 h-11 w-40 rounded-xl bg-white/10" />
            </div>
            <div className="min-h-[240px] rounded-2xl border border-white/5 bg-white/5" />
          </div>
        )}

        {variant === "skills" && (
          <>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-9 w-24 rounded-full bg-white/10" />
              ))}
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="h-28 rounded-xl border border-white/5 bg-white/5 p-5"
                >
                  <div className="h-4 w-24 rounded bg-white/10" />
                  <div className="mt-4 h-2 w-full rounded-full bg-white/10" />
                </div>
              ))}
            </div>
          </>
        )}

        {variant === "projects" && (
          <>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-9 w-16 rounded-full bg-white/10" />
              ))}
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-2xl border border-white/5 bg-white/5"
                >
                  <div className="aspect-[16/10] bg-white/10" />
                  <div className="space-y-3 p-5">
                    <div className="h-5 max-w-[85%] rounded bg-white/10" />
                    <div className="h-3 w-full rounded bg-white/5" />
                    <div className="h-3 max-w-[70%] rounded bg-white/5" />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {variant === "contact" && (
          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="h-4 w-full rounded bg-white/5" />
              <div className="h-4 max-w-[66%] rounded bg-white/5" />
              <div className="h-10 w-44 rounded-lg bg-white/10" />
            </div>
            <div className="space-y-4 rounded-2xl border border-white/5 bg-white/5 p-6">
              <div className="h-10 w-full rounded-lg bg-white/10" />
              <div className="h-10 w-full rounded-lg bg-white/10" />
              <div className="h-32 w-full rounded-lg bg-white/10" />
              <div className="h-11 w-full rounded-xl bg-primary/30" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
