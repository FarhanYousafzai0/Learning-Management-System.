import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonQuiz = () => {
  return (
    <>
      <div className="flex p-2 overflow-hidden items-center gap-5">
        <div className="rounded-lg overflow-hidden">
          <Skeleton width={150} height={100} />
        </div>
        <div className="w-full">
          <Skeleton className="w-full" height={20} count={3} />
        </div>
      </div>
      <hr className="border-0 h-[1px] bg-gray-300 my-3" />
      <div className="p-5">
        <div className="border border-gray-300 p-5 rounded-lg">
          <div className="flex items-center gap-3 justify-center">
            {[...Array(5)].map((_, index) => (
              <>
                <Skeleton
                  key={index}
                  width={60}
                  height={60}
                  circle={true}
                  inline={true}
                />
                <div className="h-[2px] w-[50px] bg-gray-200"></div>
              </>
            ))}
          </div>
          <div className="my-5 w-full">
            <Skeleton className="w-full" height={400} />
          </div>
          <div className="my-5 w-full">
            <Skeleton className="w-full" count={3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonQuiz;
