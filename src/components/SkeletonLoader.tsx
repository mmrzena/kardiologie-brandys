export function SkeletonCard() {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl border border-brand-gray/70 bg-white/80 shadow-lg shadow-slate-200/60">
      <div className="h-48 bg-slate-200" />
      <div className="p-5 space-y-2">
        <div className="h-5 w-3/4 rounded bg-slate-200" />
        <div className="h-4 w-1/2 rounded bg-slate-200" />
        <div className="h-3 w-full rounded bg-slate-200" />
      </div>
    </div>
  )
}

export function SkeletonDetail() {
  return (
    <div className="animate-pulse overflow-hidden rounded-3xl border border-brand-gray/70 bg-white/80 shadow-xl shadow-slate-200/60">
      <div className="md:flex">
        <div className="h-80 bg-slate-200 md:w-1/3" />
        <div className="space-y-4 p-8 md:w-2/3">
          <div className="h-8 w-3/4 rounded bg-slate-200" />
          <div className="h-6 w-1/2 rounded bg-slate-200" />

          <div className="space-y-2 border-t border-dashed border-slate-200 pt-4">
            <div className="h-5 w-1/4 rounded bg-slate-200" />
            <div className="h-4 w-full rounded bg-slate-200" />
          </div>
          <div className="space-y-2">
            <div className="h-5 w-1/4 rounded bg-slate-200" />
            <div className="h-4 w-full rounded bg-slate-200" />
            <div className="h-4 w-full rounded bg-slate-200" />
            <div className="h-4 w-3/4 rounded bg-slate-200" />
          </div>
          <div className="border-t border-dashed border-slate-200 pt-4">
            <div className="h-4 w-2/3 rounded bg-slate-200" />
            <div className="mt-2 h-4 w-1/2 rounded bg-slate-200" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function SkeletonList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}
