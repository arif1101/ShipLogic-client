/* eslint-disable no-unused-vars */
import React from 'react';
import { FaBox, FaBolt, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: <FaBox size={40} className="text-blue-500" />, 
    title: "Parcel Safety", 
    description: "We ensure your parcel is handled with care and reaches its destination safely."
  },
  {
    icon: <FaBolt size={40} className="text-yellow-500" />, 
    title: "Super Fast Delivery", 
    description: "Get your parcels delivered in record time with our optimized logistics."
  },
  {
    icon: <FaUsers size={40} className="text-green-500" />, 
    title: "User Friendly", 
    description: "Our app is easy to use, making parcel booking seamless for everyone."
  }
];

const statistics = [
  { title: "Parcels Booked", count: "120K+" },
  { title: "Parcels Delivered", count: "110K+" },
  { title: "App Users", count: "50K+" }
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Features</h2>
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {features.map((feature, index) => (
          <div key={index} className="p-6 w-80 shadow-md rounded-xl bg-white text-center border">
            <div className="flex flex-col items-center gap-4">
              {feature.icon}
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {statistics.map((stat, index) => (
          <div key={index} className="p-6 w-60 shadow-md rounded-xl bg-white text-center border">
            <h3 className="text-2xl font-bold text-rose-500">{stat.count}</h3>
            <p className="text-gray-600">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;