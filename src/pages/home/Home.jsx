import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const employeeLogin = useSelector((state) => state.employeeLogin);
  const { employeeInfo } = employeeLogin;
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div></div>
        <div className="widgets">
          <h1>{employeeInfo && employeeInfo.name}</h1>
          <h1>{employeeInfo && employeeInfo.userRole}</h1>
          {/* <Widget type="user" /> */}
          {/* <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" /> */}
        </div>
        {/* <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div> */}
        {/* <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
