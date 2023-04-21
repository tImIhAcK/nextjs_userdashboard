import React from "react";

const TopCards = () => {
  return (
    <div className="grid md:grid-cols-5 gap-4 p-4">
      <div className="md:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-md">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$760</p>
          <p className="text-gray-600">Daily Revenue</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-md">
          <span className="text-green-700 text-md">+18%</span>
        </p>
      </div>
      <div className="md:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-md">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$12 645 092</p>
          <p className="text-gray-600">YTD Revenue</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-md">
          <span className="text-green-700 text-md">+13%</span>
        </p>
      </div>
      <div className="bg-white flex justify-between w-full border p-4 rounded-md">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">760</p>
          <p className="text-gray-600">Users</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-md">
          <span className="text-green-700 text-md">+6%</span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;
