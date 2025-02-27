/* eslint-disable no-unused-vars */
import React from "react";

const TopDelevary = () => {
  const deliveryMen = [
    {
      name: "John Doe",
      image: "https://i.ibb.co/Q3nGd5PD/93856182-dfa4-4db5-b974-466766b4830b.jpg",
      parcelsDelivered: 120,
      avgRating: 4.8,
    },
    {
      name: "Michael Smith",
      image: "https://i.ibb.co/Q3nGd5PD/93856182-dfa4-4db5-b974-466766b4830b.jpg",
      parcelsDelivered: 105,
      avgRating: 4.7,
    },
    {
      name: "David Johnson",
      image: "https://i.ibb.co/Q3nGd5PD/93856182-dfa4-4db5-b974-466766b4830b.jpg",
      parcelsDelivered: 98,
      avgRating: 4.6,
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto p-8 lg:px-[100px] bg-gradient-to-r from-rose-100 to-rose-300 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        🚚 Top Delivery Men
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {deliveryMen.map((man, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={man.image}
              alt={man.name}
              className="w-28 h-28 object-cover rounded-full border-4 border-rose-500 mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800">{man.name}</h3>
            <p className="text-gray-600 text-lg mt-1">
              📦 Delivered: <span className="font-bold">{man.parcelsDelivered}</span>
            </p>
            <p className="text-yellow-500 text-xl mt-2">
              ⭐ {man.avgRating.toFixed(1)}
            </p>
            <button className="mt-4 bg-rose-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-rose-600 transition duration-300">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDelevary;
