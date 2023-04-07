import Image from "next/image";
import React from "react";

const Booking = () => {
  return (
    <div className="w-full lg:h-screen dark:bg-[#282a36]">
      <div id="book" className="max-w-[90%] m-auto px-2 py-40 w-full">
        <p className="text-xl tracking-widest uppercase text-[red]"></p>
        <h2 className=" tracking-wide py-4 text-center dark:text-[white]">
          {" "}
          Booking Page
        </h2>
        <div className="grid lg:grid-cols-5 gap-8 mt-5">
          {/* left */}

          <div className="col-span-3 lg:col-span-2 w-full mx-auto h-full shadow-xl shadow-gray-400 dark:shadow-[black] dark:bg-[#202020] bg-[#F2F2F2] rounded-xl p4">
            {/* <div className="text-center"><h2>let&apos;s book!</h2></div> */}
            <form>
              <div className="grid md:grid-cols-1 gap-4 w-full py-3">
                <div className="px-3 py-2 ">
                  <div className="text-lg uppercase ">
                    <div className="flex flex-col ">
                      <label className="uppercase text-sm py-2 dark:text-[white]">
                        Ex Room Name
                      </label>
                      <input
                        className="border-2 rounded-lg flex py-0 px-2 border-gray-300 dark:bg-[#989898]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="text-lg uppercase dark:text-[white]">
                    <div className="flex flex-col ">
                      <label className="uppercase text-sm py-2">
                        Ex Type of room here
                      </label>
                      <input
                        className="border-2 rounded-lg flex py-0 px-2 border-gray-300 dark:bg-[#989898]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="text-lg uppercase dark:text-[white]">
                    <div className="flex flex-col ">
                      <label className="uppercase text-sm py-2">
                        Ex number of room here
                      </label>
                      <input
                        className="border-2 rounded-lg flex py-0 px-2 border-gray-300 dark:bg-[#989898]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="text-lg uppercase dark:text-[white]">
                    <div className="flex flex-col ">
                      <label className="uppercase text-sm py-2">
                        EX Time here
                      </label>
                      <div className="grid md:grid-cols-2 ">
                        <input
                          className="border-2 rounded-lg flex  border-gray-300 dark:bg-[#989898]"
                          type="text"
                        />
                        <input
                          className="border-2 rounded-lg flex  border-gray-300 dark:bg-[#989898] "
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="text-lg uppercase ">
                    <div className="flex flex-col ">
                      <label className="uppercase text-sm py-2">
                        date here
                      </label>
                      <input
                        className="border-2 rounded-lg flex py-0 px-2 border-gray-300 "
                        type="text"
                      />
                    </div>
                  </div> */}
                </div>

                <div className="px-[30%] py-2 text-center">
                  <button className="w-full p-4 py-4 px-7 rounded-full uppercase cursor-pointer hover:scale-[95%] ease-in duration-100 text-sm tracking-widest font-semibold text-white mt-4 shadow-gray-400 dark:shadow-[black]">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* right */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 dark:shadow-[black] rounded-xl md:p-4 dark:bg-[#202020] bg-[#F2F2F2]">
            <div>
              <div>
                <div className="lg:p-4 h-full">
                  <Image
                    src="/assets/libranameroomV2.png"
                    width={2212}
                    height={1215}
                    alt="/"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
0;
export default Booking;
