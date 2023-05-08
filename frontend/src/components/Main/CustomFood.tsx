//template for modal takes component as props
import React from "react";
import LogButton from "./LogButton";
//reusable modal component

const CustomFood = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <LogButton text="+ Custom Food" onClick={() => setShowModal(true)} />
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Custom Food</h3>
                </div>
                {/*body*/}
                <div className="body">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="foodname"
                  >
                    Food Name
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="foodname"
                    type="text"
                    placeholder="Enter food name"
                  />

                  <label
                    className="block text-gray-700 font-bold mb-2 mt-4"
                    htmlFor="calories"
                  >
                    Calories
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="calories"
                    type="number"
                    placeholder="Enter calories"
                  />

                  <label
                    className="block text-gray-700 font-bold mb-2 mt-4"
                    htmlFor="protein"
                  >
                    Protein
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="protein"
                    type="number"
                    placeholder="Enter protein"
                  />

                  <label
                    className="block text-gray-700 font-bold mb-2 mt-4"
                    htmlFor="carbs"
                  >
                    Carbs
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="carbs"
                    type="number"
                    placeholder="Enter carbs"
                  />

                  <label
                    className="block text-gray-700 font-bold mb-2 mt-4"
                    htmlFor="fats"
                  >
                    Fats
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                    id="fats"
                    type="number"
                    placeholder="Enter fats"
                  />

                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
                    Add Food
                  </button>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleClose()}
                  >
                    Close
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

export default CustomFood;
