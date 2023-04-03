import React from "react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import axios from "axios";
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
        <div className="flex-1 flex overflow-hidden">
          <main className="flex-1 overflow-y-auto p-4">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Fitness Log</h2>
              im angwy
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Log;
