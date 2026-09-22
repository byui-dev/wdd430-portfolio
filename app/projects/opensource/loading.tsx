// app/projects/opensource/loading.tsx
export default function Loading() {
  // Create an array of 3 items to show a grid of 3 placeholder cards
  const skeletons = Array.from({ length: 3 });

  return (
    <main className="max-w-6xl mx-auto p-6">
      {/* Title placeholder */}
      <div className="h-8 w-64 bg-gray-200 rounded-md animate-pulse mb-8" />

      {/* Grid Layout mimicking your project structure */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skeletons.map((_, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-5 space-y-4 shadow-sm bg-white"
          >
            {/* Project Image/Icon Placeholder */}
            <div className="w-full h-48 bg-gray-200 rounded-lg animate-pulse" />

            {/* Project Title Placeholder */}
            <div className="h-5 bg-gray-200 rounded-md animate-pulse w-3/4" />

            {/* Project Description Placeholders */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded-md animate-pulse w-full" />
              <div className="h-4 bg-gray-200 rounded-md animate-pulse w-5/6" />
            </div>

            {/* Footer/Tags Placeholder */}
            <div className="flex space-x-2 pt-2">
              <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse" />
              <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}