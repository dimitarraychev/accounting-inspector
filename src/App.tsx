import { useState } from "react";
import "./App.css";
import SideMenu from "./components/SideMenu/SideMenu";
import CustomLineChart from "./components/CustomLineChart/CustomLineChart";
import { useReportContext } from "./context/ReportContext";
import Loader from "./components/Loader/Loader";
import TopMenu from "./components/TopMenu/TopMenu";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const { loading } = useReportContext();

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
          <TopMenu
          />
          <CustomLineChart />
        </div>
      </div>
    </div>
  );
}

export default App;
