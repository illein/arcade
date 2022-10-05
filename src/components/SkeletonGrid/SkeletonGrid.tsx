import "react-loading-skeleton/dist/skeleton.css";

import LoadingSkeleton from "react-loading-skeleton";

export const SkeletonGrid = () => (
  <div className="grid grid-cols-4 gap-4">
    {Array.from({ length: 8 }).map((_, index) => (
      <article className="bg-gray-100 p-4" key={index}>
        <LoadingSkeleton className="h-48 w-full" />
        <div className="mt-3 capitalize">
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
        </div>
      </article>
    ))}
  </div>
);
