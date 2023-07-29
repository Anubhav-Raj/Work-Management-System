/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { Link, useParams } from "react-router-dom";
import { viewTasks } from "../../actions/projectlistAction";
import { listEmployee } from "../../actions/employeeAction";
import { useDispatch, useSelector } from "react-redux";
function Taskview() {
  const { id, type, webtargetUrls } = useParams();
  console.log(useParams());
  const dispatch = useDispatch();
  const TaskView = useSelector((state) => state.tasksView);
  const { tasks } = TaskView;
  const { data } = tasks;

  const employeeList = useSelector((state) => state.employeeList);
  const { loading, error, employees } = employeeList;

  let android = "";
  let ios = "";
  if (data && data.mobileData) {
    const mobileData = data.mobileData;
    android = mobileData.android !== "";
    ios = mobileData.ios !== "";
  }
  useEffect(() => {
    dispatch(viewTasks(id));
    dispatch(listEmployee());
  }, [dispatch, id]);

  return (
    <div className="App">
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className=" flex mt-6 mx-10 justify-between ">
            <div className="font-bold text-2xl">Task Name</div>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Report
            </button>
          </div>

          <div className="m-10 flex gap-4  flex-col   rounded-lg border border-dashed border-gray-900/25 p-6">
            {/* 3 cards */}
            {data &&
            data.webData &&
            data.webData.webotherRemarks &&
            type === "web" ? (
              <div className="block w-full rounded-lg bg-white p-6 m-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <h1>For web</h1>
                {data.webData.webtargetUrls &&
                  data.webData.webtargetUrls.map((url) => {
                    const shouldShow = webtargetUrls === url._id;
                    if (shouldShow) {
                      return (
                        <div className=" border-b-2 my-5  py-5">
                          <div className="   pb-2 shadow-sm  flex   gap-9 sm:px-0">
                            <div className="text-md font-medium leading-6 text-gray-900">
                              {url.lable}:
                            </div>
                            <div
                              key={url._id}
                              className=" flex  mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                            >
                              <a
                                href={url.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {url.link}
                              </a>
                            </div>
                          </div>
                          <div className="flex">
                            <h3> Assign To: </h3>
                            {url.assignEmployee.map((employee) => {
                              const filteredEmployees = employees.filter(
                                (emp) => employee.employee.includes(emp._id)
                              );
                              const namesOfFilteredEmployees =
                                filteredEmployees.map((emp) => emp.name);
                              return (
                                <span
                                  key={employee._id}
                                  className="mx-2 list-none bg-green-500 py-1 px-2 rounded-full text-white inline-block no-underline font-[bold] bg-[linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(5,223,89,0.7372198879551821) 0%)] transition-[0.4s] hover:bg-[background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(5,223,89,0.9781162464985994) 0%);]"
                                >
                                  {namesOfFilteredEmployees.join(", ")}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })}

                <div className=" mt-4 flex flex-col">
                  <div className="text-md font-medium leading-6 text-gray-900">
                    Remarks :
                  </div>
                  <div className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {data.webData && data.webData.webotherRemarks}
                  </div>
                </div>
              </div>
            ) : null}

            {data &&
            data.mobileData &&
            data.mobileData.mobileotherRemarks &&
            type === "mobile" ? (
              <div className="block w-full rounded-lg bg-white p-6 m-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <h1>For Mobile</h1>
                {android && (
                  <div className=" mt-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <div className="text-md font-medium leading-6 text-gray-900">
                      Android
                    </div>
                    <div className="mt-1  flex text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      <a href={data.mobileData && data.mobileData.android}>
                        {data.mobileData && data.mobileData.android}
                      </a>
                    </div>
                  </div>
                )}
                {ios && (
                  <div className=" mt-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <div className="text-md font-medium leading-6 text-gray-900">
                      IOS
                    </div>
                    <div className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      <a href={data.mobileData && data.mobileData.ios}>
                        {data.mobileData && data.mobileData.ios}
                      </a>
                    </div>
                  </div>
                )}

                <div className=" mt-4 flex flex-col">
                  <div className="text-md font-medium leading-6 text-gray-900">
                    Remarks :
                  </div>
                  <div className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {data.mobileData && data.mobileData.mobileotherRemarks}
                  </div>
                </div>
              </div>
            ) : null}

            {data &&
            data.apiData &&
            data.apiData.apiotherRemarks &&
            type === "api" ? (
              <div className="block w-full rounded-lg bg-white p-6 m-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <h1>For Api</h1>
                <div className=" mt-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <span className=" flex font-medium text-indigo-600 hover:text-indigo-500">
                    <PaperClipIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    FILE
                  </span>
                </div>
                <div className="flex">
                  <h3> Assign To: </h3>
                  {data.apiData.assignEmployee.map((employee) => {
                    const filteredEmployees = employees.filter((emp) =>
                      employee.employee.includes(emp._id)
                    );
                    const namesOfFilteredEmployees = filteredEmployees.map(
                      (emp) => emp.name
                    );
                    return (
                      <span
                        key={employee._id}
                        className="mx-2 list-none bg-green-500 py-1 px-2 rounded-full text-white inline-block no-underline font-[bold] bg-[linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(5,223,89,0.7372198879551821) 0%)] transition-[0.4s] hover:bg-[background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(5,223,89,0.9781162464985994) 0%);]"
                      >
                        {namesOfFilteredEmployees.join(", ")}
                      </span>
                    );
                  })}
                </div>

                <div className=" mt-4 flex flex-col">
                  <div className="text-md font-medium leading-6 text-gray-900">
                    Remarks :
                  </div>
                  <div className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {data.apiData && data.apiData.apiotherRemarks}
                  </div>
                </div>

                <div className=" mt-2 flex justify-end gap-x-6"></div>
              </div>
            ) : null}
            {data &&
            data.networkData &&
            data.networkData.networkotherRemarks &&
            type === "network" ? (
              <div className="block w-full rounded-lg bg-white p-6 m-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <h1>For Network</h1>
                <div className=" mt-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <span className=" flex font-medium text-indigo-600 hover:text-indigo-500">
                    <PaperClipIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    FILE
                  </span>
                </div>
                <div className="flex">
                  <h3> Assign To: </h3>
                  {data.networkData.assignEmployee.map((employee) => {
                    const filteredEmployees = employees.filter((emp) =>
                      employee.employee.includes(emp._id)
                    );
                    const namesOfFilteredEmployees = filteredEmployees.map(
                      (emp) => emp.name
                    );
                    return (
                      <span
                        key={employee._id}
                        className="mx-2 list-none bg-green-500 py-1 px-2 rounded-full text-white inline-block no-underline font-[bold] bg-[linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(5,223,89,0.7372198879551821) 0%)] transition-[0.4s] hover:bg-[background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(5,223,89,0.9781162464985994) 0%);]"
                      >
                        {namesOfFilteredEmployees.join(", ")}
                      </span>
                    );
                  })}
                </div>
                <div className=" mt-4 flex flex-col">
                  <div className="text-md font-medium leading-6 text-gray-900">
                    Remarks :
                  </div>
                  <div className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {data.networkData && data.networkData.networkotherRemarks}
                  </div>
                </div>

                <div className=" mt-2 flex justify-end gap-x-6"></div>
              </div>
            ) : null}
            {data &&
            data.grcData &&
            data.grcData.grcotherRemarks &&
            type === "grc" ? (
              <div className="block w-full rounded-lg bg-white p-6 m-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <h1>For GRC</h1>
                <div className="flex">
                  <h3> Assign To: </h3>
                  {data.grcData.assignEmployee.map((employee) => {
                    const filteredEmployees = employees.filter((emp) =>
                      employee.employee.includes(emp._id)
                    );
                    const namesOfFilteredEmployees = filteredEmployees.map(
                      (emp) => emp.name
                    );
                    return (
                      <span
                        key={employee._id}
                        className="mx-2 list-none bg-green-500 py-1 px-2 rounded-full text-white inline-block no-underline font-[bold] bg-[linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(5,223,89,0.7372198879551821) 0%)] transition-[0.4s] hover:bg-[background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(5,223,89,0.9781162464985994) 0%);]"
                      >
                        {namesOfFilteredEmployees.join(", ")}
                      </span>
                    );
                  })}
                </div>

                <div className=" mt-4 flex flex-col">
                  <div className="text-md font-medium leading-6 text-gray-900">
                    Remarks :
                  </div>
                  <div className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {data.grcData && data.grcData.grcotherRemarks}
                  </div>
                </div>

                <div className=" mt-2 flex justify-end gap-x-6"></div>
              </div>
            ) : null}
          </div>

          <div className="m-10 flex gap-4  flex-col   rounded-lg border border-dashed border-gray-900/25 p-4">
            <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4">
              <dt className="text-sm font-semibold leading-6 text-gray-900">
                Edited :
              </dt>
              <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                10/12/2023
              </div>
            </div>

            <div className="px-4  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4">
              <dt className="text-sm font-semibold leading-6 text-gray-900">
                Name :
              </dt>
              <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Dummy name
              </div>
            </div>

            <div className="px-6  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4">
              <dt className="text-sm font-semibold leading-6 text-gray-900">
                Pdf :
              </dt>
              <div className=" flex-shrink-0">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Download
                </a>
              </div>
            </div>

            <div className="px-4  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4">
              <dt className="text-sm font-semibold leading-6 text-gray-900">
                Comments :
              </dt>

              <div className=" flex flex-col   rounded-lg border border-dashed border-gray-900/25 w-[550px]">
                <div className="container">
                  <div className="bg-white rounded-lg shadow-lg p-4">
                    {/* Chat area */}
                    <div className="mb-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0"></div>
                        <div className="ml-3">
                          <div className="bg-blue-100 text-blue-900 p-2 rounded-lg">
                            Jaldi kam kar bhai .
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Just now</p>
                        </div>
                      </div>

                      <div className="flex items-end">
                        <div className="flex-shrink-0"></div>
                        <div className="ml-3">
                          <div className="bg-green-100 text-blue-600 p-2 rounded-lg">
                            -- Ok sir .
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Just now</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center border-t mt-4 pt-4">
                      <input
                        type="text"
                        className="w-full rounded-lg border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-400"
                        placeholder="Type your message..."
                      />
                      <div className=" mr-3 ">
                        <PaperClipIcon
                          className="h-5 cursor-pointer w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <button className="ml-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="inline-block rounded-full w-24 ml-4 bg-success px-2 text-xs uppercase leading-normal text-white cursor-auto"
            >
              completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Taskview;
