import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reportCreate } from "../../actions/reportSubmit";
const Reportsubmit = () => {
  const [vulnerability, setVulnerability] = useState("");
  const [risk, setRisk] = useState("");
  const [attributingFactor, setAttributingFactor] = useState("");
  const [affectedUrl, setAffectedUrl] = useState("");
  const [observation, setObservation] = useState("");
  const [cwe, setCwe] = useState("");
  const [impact, setImpact] = useState("");
  const [mitigation, setMitigation] = useState("");
  const [pocFile, setPocFile] = useState(null);
  const [brief, setBrief] = useState("");
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const timestamp = Date.now();
    const fileName = `${file.name}_${timestamp}`;
    setPocFile(fileName);
  };

  const [message, setMessage] = useState("");

  // //const location = useLocation();
  // //const Navigate = useNavigate();
  // const dispatch = useDispatch();
  // //const redirect = location.search ? location.search.split("=")[1] : "/";
  // const userData = JSON.parse(localStorage.getItem("employeeInfo"));
  // const employee = userData?.id;
  // console.log(employee);
  // const reportCreated = useSelector((state) => state.reportCreated);
  // const { loading, error, report } = reportCreated;
  // useEffect(() => {
  //   if (report) {
  //     if (!report.isError) {
  //       //Navigate(redirect);
  //     } else {
  //       setMessage(report.message);
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [report]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(
    //   reportCreate(
    //     vulnerability,
    //     risk,
    //     attributingFactor,
    //     affectedUrl,
    //     observation,
    //     cwe,
    //     impact,
    //     mitigation,
    //     pocFile,
    //     brief,
    //     employee
    //   )
    // );
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {/* main code here  */}
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight m-6">
          Submit Report
        </h2>
        <div className=" flex w-fit  rounded-lg border border-dashed border-gray-900/25 p-6 m-6 mt-6">
          <form onSubmit={handleSubmit}>
            <div className=" flex  ">
              <div className="sm:col-span-4">
                <label
                  htmlFor="Vulnerability"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Vulnerability Name
                </label>
                <div className="mt-2">
                  <input
                    value={vulnerability}
                    onChange={(e) => setVulnerability(e.target.value)}
                    id="Vulnerability"
                    name="vulnerability"
                    type="text"
                    className="block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4 ml-10 ">
                <label
                  htmlFor="Vulnerability"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Risk
                </label>
                <div className="mt-2">
                  <input
                    value={risk}
                    onChange={(e) => setRisk(e.target.value)}
                    id="Vulnerability"
                    name="risk"
                    type="text"
                    className="block w-[300px]  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="ml-10 sm:col-span-4">
                <label
                  htmlFor="Vulnerability"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Attributing Factor
                </label>
                <div className="mt-2">
                  <input
                    value={attributingFactor}
                    onChange={(e) => setAttributingFactor(e.target.value)}
                    id="Vulnerability"
                    name="attributingFactor"
                    type="text"
                    className="block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className=" flex  mt-8 ">
              <div className="sm:col-span-4">
                <label
                  htmlFor="Vulnerability"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Affected URL
                </label>
                <div className="mt-2">
                  <input
                    value={affectedUrl}
                    onChange={(e) => setAffectedUrl(e.target.value)}
                    name="affectedUrl"
                    type="text"
                    className="block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4 ml-10 ">
                <label
                  htmlFor="Vulnerability"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Observation
                </label>
                <div className="mt-2">
                  <input
                    value={observation}
                    onChange={(e) => setObservation(e.target.value)}
                    id="Vulnerability"
                    name="observation"
                    type="text"
                    className="block w-[300px]  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4 ml-10 ">
                <label
                  htmlFor="Vulnerability"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  CWE #
                </label>
                <div className="mt-2">
                  <input
                    value={cwe}
                    onChange={(e) => setCwe(e.target.value)}
                    id="Vulnerability"
                    name="cwe"
                    type="text"
                    className="block w-[300px]  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className=" flex  mt-8 ">
              <div className="sm:col-span-4">
                <label
                  htmlFor="Vulnerability"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Impact
                </label>
                <div className="mt-2">
                  <input
                    value={impact}
                    onChange={(e) => setImpact(e.target.value)}
                    id="Vulnerability"
                    name="impact"
                    type="text"
                    className="block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4 ml-10 ">
                <label
                  htmlFor="Vulnerability"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mitigations
                </label>
                <div className="mt-2">
                  <input
                    value={mitigation}
                    onChange={(e) => setMitigation(e.target.value)}
                    id="Vulnerability"
                    name="mitigation"
                    type="text"
                    className="block w-[300px]  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4 ml-10 w-[300px] ">
                <label
                  htmlFor="Vulnerability"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  POC
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleFileInputChange}
                    class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                    type="file"
                    name="files"
                    id="formFile"
                  />
                </div>
              </div>
            </div>

            <div className=" flex flex-col  mt-8 ">
              <div className="sm:col-span-4">
                <label
                  htmlFor="Vulnerability"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Brief Description
                </label>
                <div className="mt-2">
                  <input
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    id="Vulnerability"
                    name="brief"
                    type="text"
                    className="block w-[650px] h-[75px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className=" flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reportsubmit;
