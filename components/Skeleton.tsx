// Reusable Skeleton Components for Loading States

export function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="aspect-square bg-gray-200"></div>

      {/* Content Skeleton */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>

        {/* Subtitle */}
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>

        {/* Description */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded"></div>
          <div className="h-3 bg-gray-200 rounded"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        </div>

        {/* Products */}
        <div className="flex gap-2">
          <div className="h-6 bg-gray-200 rounded-full w-20"></div>
          <div className="h-6 bg-gray-200 rounded-full w-24"></div>
          <div className="h-6 bg-gray-200 rounded-full w-16"></div>
        </div>

        {/* Button */}
        <div className="h-10 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
}

export function SkeletonSpot() {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg animate-pulse">
      <div className="aspect-[4/5] bg-gray-200"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>
    </div>
  );
}

export function SkeletonNews() {
  return (
    <article className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 animate-pulse">
      <div className="h-56 bg-gray-200"></div>
      <div className="p-8 space-y-4">
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="h-6 bg-gray-200 rounded w-full"></div>
        <div className="h-6 bg-gray-200 rounded w-4/5"></div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded"></div>
          <div className="h-3 bg-gray-200 rounded"></div>
          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      </div>
    </article>
  );
}

export function SkeletonHero() {
  return (
    <section className="relative min-h-[85vh] bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
      <div className="relative container mx-auto px-4 py-32 flex items-center min-h-[85vh]">
        <div className="max-w-4xl space-y-6">
          <div className="h-4 bg-gray-700 rounded-full w-48"></div>
          <div className="space-y-4">
            <div className="h-12 bg-gray-700 rounded w-full"></div>
            <div className="h-12 bg-gray-700 rounded w-5/6"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-700 rounded w-2/3"></div>
          </div>
          <div className="flex gap-4 pt-4">
            <div className="h-12 bg-gray-700 rounded-xl w-48"></div>
            <div className="h-12 bg-gray-700 rounded-xl w-48"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SkeletonStat() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-pulse">
      <div className="w-16 h-16 bg-gray-200 rounded-2xl mx-auto mb-6"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-3"></div>
      <div className="h-10 bg-gray-200 rounded w-1/2 mx-auto mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto"></div>
    </div>
  );
}

export function SkeletonInfoCard() {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-2xl border border-gray-200 animate-pulse">
      <div className="w-14 h-14 bg-gray-300 rounded-xl mb-6"></div>
      <div className="h-6 bg-gray-300 rounded w-2/3 mb-3"></div>
      <div className="space-y-2 mb-4">
        <div className="h-3 bg-gray-300 rounded"></div>
        <div className="h-3 bg-gray-300 rounded w-5/6"></div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-4/5"></div>
      </div>
    </div>
  );
}

// Loading Page Components
export function UMKMPageLoading() {
  return (
    <div>
      {/* Hero Skeleton */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-pulse">
            <div className="h-4 bg-white/20 rounded-full w-48 mx-auto"></div>
            <div className="h-12 bg-white/20 rounded w-96 mx-auto"></div>
            <div className="h-6 bg-white/20 rounded w-full max-w-3xl mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Filter Skeleton */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 justify-center animate-pulse">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-10 bg-gray-200 rounded-full w-28"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Skeleton */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function HomePageLoading() {
  return (
    <div>
      <SkeletonHero />

      {/* Honest Tourism Skeleton */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4 animate-pulse">
              <div className="h-6 bg-gray-200 rounded-full w-32 mx-auto"></div>
              <div className="h-10 bg-gray-200 rounded w-96 mx-auto"></div>
              <div className="h-5 bg-gray-200 rounded w-full max-w-2xl mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <SkeletonInfoCard key={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Skeleton */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-pulse">
            <div className="h-10 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
            <div className="h-5 bg-gray-200 rounded w-48 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => (
              <SkeletonStat key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Spots Skeleton */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-pulse">
            <div className="h-6 bg-gray-200 rounded-full w-40 mx-auto mb-4"></div>
            <div className="h-10 bg-gray-200 rounded w-80 mx-auto mb-4"></div>
            <div className="h-5 bg-gray-200 rounded w-96 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[1, 2, 3].map((i) => (
              <SkeletonSpot key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* News Skeleton */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-pulse">
            <div className="h-10 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
            <div className="h-5 bg-gray-200 rounded w-72 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[1, 2, 3].map((i) => (
              <SkeletonNews key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
