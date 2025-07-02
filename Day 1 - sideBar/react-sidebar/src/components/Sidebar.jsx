import React, { useState } from "react";
import "../Sidebar.css";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <aside className={collapsed ? "collapsed" : ""}></aside>

      <main>

          <button onClick={toggleSidebar}>
            <img src="/Sidebar.svg" alt="sidebar button image" />
          </button>

      </main>
    </>
  );
}
