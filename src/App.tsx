import { useState } from "react";
import "./App.css";
import SideMenu from "./components/SideMenu/SideMenu";
import CustomLineChart from "./components/CustomLineChart/CustomLineChart";
import { useReportContext } from "./context/ReportContext";
import Loader from "./components/Loader/Loader";
import { formatDate } from "./utils/date";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const { loading, timePeriodStart, timePeriodEnd } = useReportContext();

  return (
    <div className="app">
      <div className="app-body">
        <SideMenu
          isCollapsed={isSidebarCollapsed}
          onCollapseToggle={() => setIsSidebarCollapsed((prev) => !prev)}
        />
        {loading && (
          <div className="loader-overlay">
            <Loader size={20} />
          </div>
        )}
        <div
          className={
            isSidebarCollapsed ? "chart-wrapper expanded" : "chart-wrapper"
          }
        >
          <div className="tabs-menu">
            <div className="times-wrapper">
              <p>
                <span className="time-label">From:</span>{" "}
                <span>{formatDate(timePeriodStart)}</span>
              </p>
              <p>
                <span className="time-label">To:</span>{" "}
                <span>{formatDate(timePeriodEnd)}</span>
              </p>
            </div>
          </div>
          <CustomLineChart />
        </div>
      </div>
    </div>
  );
}

export default App;
