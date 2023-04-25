import React from "react";

const Data = () => {
  return (
    <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl p-8">
      <h2 className="text-lg font-semibold mb-4">Fitness Log</h2>
      <div className="flex space-x-2">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center">
          + Food
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center">
          + Biometric
        </button>
      </div>
      <p>Your fitness log content goes here.</p>
    </div>
  );
};

export default Data;
