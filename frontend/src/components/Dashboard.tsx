import React, { useEffect } from "react";
import CircleChart from "./Main/CircleChart";
import "react-circular-progressbar/dist/styles.css";
import AddFood from "./Main/AddFood";
import Modal from "./Main/Modal";
import LogButton from "./Main/LogButton";
import mealService from "../services/mealService";
import CustomFood from "./Main/CustomFood";
import {userId} from "../types";
const Dashboard = () => {
  const string = "add food";

  const [date, setDate] = React.useState(
    new Date().toString().substring(0, 15)
  ); //date
  const [clientId, setClientId] = React.useState(""); //client id
  const [meals, setMeals] = React.useState([]); //meals

  useEffect(() => {
    const id = localStorage.getItem("userId");
    setClientId(id!);
    console.log(clientId);
    const userId:userId = {
      userId: clientId,
    }
    mealService.getMeals(userId).then((meals) => {
      setMeals(meals);
      console.log(meals);
    }
    );
  }, []);

  return (
    <div>
      <div className="flex flex-col h-screen min-h-screen">
        <div className="h-100 flex-1 flex overflow-hidden">
          <main className="flex-1 overflow-y-auto p-4">
            <div
              className="bg-white rounded-xl shadow-xl hover:shadow-2xl p-8"
              style={{ height: 500 }}
            >
              <h2 className="text-lg font-semibold mb-4">Fitness Log</h2>
              <div className="flex space-x-2">
                <LogButton text="<" />
                <h3>{date}</h3>
                <LogButton text=">" />
                <AddFood />
                <CustomFood />
              </div>
              <p>Your fitness log content goes here.</p>
            </div>
            <div className="flex justify-center">
              <div className="w-1/2 bg-white rounded-xl shadow-xl hover:shadow-2xl p-8 mr-4 mt-10">
                <h2 className="text-lg font-semibold mb-4">
                  Energy Consumption
                </h2>
                <div className="flex flex-row space-x-9 justify-center">
                  <CircleChart value={1} />
                  <CircleChart value={1} />
                </div>
              </div>
              <div className="w-1/2 bg-white rounded-xl shadow-xl hover:shadow-2xl p-8 mt-10">
                <h2 className="text-lg font-semibold mb-4">Macros</h2>
                <div className="flex flex-row space-x-9 justify-center">
                  <CircleChart value={1} />
                  <CircleChart value={1} />
                  <CircleChart value={1} />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
