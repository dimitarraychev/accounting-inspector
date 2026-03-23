import { useState } from "react";
import "./App.css";
import SideMenu from "./components/SideMenu/SideMenu";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="app">
      <div className="app-body">
        <SideMenu
          isCollapsed={isSidebarCollapsed}
          onCollapseToggle={() => setIsSidebarCollapsed((prev) => !prev)}
        />
      </div>
    </div>
  );
}

export default App;
