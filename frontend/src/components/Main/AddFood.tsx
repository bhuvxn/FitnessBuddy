import React from "react";
import axios from "axios";
import { useState } from "react";
import LogButton from "./LogButton";
const AddFood = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [Search, SetSearch] = useState<string>("");
  const [Results, SetResults] = useState<any[]>([]);
  const url = `https://api.edamam.com/api/food-database/parser?app_id=9f259904&app_key=01b4010ecafba36b19688cf87bf0de84&ingr=${Search}`;

  const getData = () => {
    axios.get(url).then((response) => {
      console.log(response.data.hints);
      SetResults(response.data.hints);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetSearch("")
    SetResults([]);
    SetSearch(e.currentTarget.value);
    getData();
  };
  const handleClose = ()=>{
    setShowModal(false)
    SetSearch("")
    SetResults([])
  }
  
  
  return (
    <>
      <LogButton text="clickme!" onClick={() => setShowModal(true)} />
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Search Foods</h3>
                  <div className="relative mx-auto text-gray-600">
                    <input
                      className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                      type="search"
                      name="search"
                      placeholder="Search"
                      value={Search}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="">
                  {Results.map((result) => {
                    return (
                        <div key={result.food.foodId} className="flex flex-col my-2">
                        <h2>{result.food.label}</h2>
                        <div className="flex">
                          <p className="mr-1">{result.food.nutrients.ENERC_KCAL} calories</p>
                          <p className="mr-1">{result.food.nutrients.CHOCDF} carbs</p>
                          <p className="mr-1">{result.food.nutrients.PROCNT} protein</p>
                          <p>{result.food.nutrients.FAT} fat</p>
                          <button className = "mr-3">Add to Log</button>

                        </div>
                      </div>
                    );
                  })}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleClose()}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default AddFood;
