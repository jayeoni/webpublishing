import React from 'react';

export const HomePage = () => {
  return (
    <div className="m-4">
      <div className="py-4 text-3xl font-bold mb-5 mt-10">List</div>
      <div className="p-5 border border-gray-200">
        <div className="p-40 bg-gray-100"></div>
        <div className="my-3 font-semibold">Card Title</div>
        <div className="font-light">Sed vel turpis~~</div>
        <div className="mt-5">
          <div className="bg-gray-800 text-white text-center py-3 px-10">
            상세정보
          </div>
          <div className="text-center py-3 text-gray-800 border border-gray-800 mt-2">
            주문하기
          </div>
        </div>
      </div>
    </div>
  );
};
