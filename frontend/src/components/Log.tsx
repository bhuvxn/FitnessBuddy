import React from "react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import axios from "axios";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Log = () => {
  const [selected, setSelected] = useState<string>("");

  return (
    <div>
      <Sidebar />
      <div className="flex flex-col h-screen">
        <div className="flex-shrink-0 bg-gray-800">
          <nav className="flex justify-between px-4 py-3">
            <a href="#" className="text-gray-300 hover:text-white">
              Add Food
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Add Biometric
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Calorie Settings
            </a>
          </nav>
        </div>
        <div className="h-96 flex-1 flex overflow-hidden">
          <main className="flex-1 overflow-y-auto p-4">
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
            <div className="flex justify-center">
              <div className="w-1/2 bg-white rounded-xl shadow-xl hover:shadow-2xl p-8 mr-4 mt-10">
                <h2 className="text-lg font-semibold mb-4">
                  Energy Consumption
                </h2>
                <p>Content for Box 1 goes here.</p>
              </div>
              <div className="w-1/2 bg-white rounded-xl shadow-xl hover:shadow-2xl p-8 mt-10">
                <h2 className="text-lg font-semibold mb-4">Macros</h2>
                <p>Content for Box 2 goes here.</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Log;
