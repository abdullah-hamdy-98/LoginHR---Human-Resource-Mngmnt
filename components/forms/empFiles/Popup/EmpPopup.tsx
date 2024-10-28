"use Client"
import EmpFileTable from "@/components/Tables/EmpFileTable";
import { useState } from "react";

function EmpPopup() {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <div className="ml-auto">

                <button
                    onClick={openModal}
                    type="button"
                    data-modal-target="default-modal"
                    data-modal-toggle="default-modal"
                    className="px-40 py-1 text-subtle-medium inline-flex items-center text-white bg-blue-1 rounded-md hover:bg-blue transition-colors duration-300 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="100 -960 960 960" width="16px" fill="#FFFFFF">
                        <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                    </svg>
                    Search
                </button>
                {isOpen && (<div
                    className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50"
                    aria-hidden={!isOpen}
                >
                    <div className="relative p-0 w-4/5 bg-white rounded-lg shadow">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <h4 className="text-small-regular font-semibold text-gray-900">
                                Search Employee
                            </h4>
                            <button
                                type="button"
                                onClick={closeModal}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-8 ms-auto inline-flex justify-center items-center"
                            >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close Popup</span>
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-4 md:p-5 space-y-4">
                            <EmpFileTable />
                        </div>

                        {/* Modal Footer */}
                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                            <button
                                onClick={closeModal}
                                type="button"
                                className="px-3 py-1.5 mx-1 text-subtle-medium inline-flex items-center text-white bg-blue-1 rounded-md hover:bg-blue transition-colors duration-300 ease-in-out"
                            >
                                Submit
                            </button>
                            <button
                                onClick={closeModal}
                                type="button"
                                className="px-2 py-1.5 mx-1 text-subtle-medium inline-flex items-center text-white bg-red-1 rounded-md hover:bg-red-2 transition-colors duration-300 ease-in-out"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </>
    )
}

export default EmpPopup;