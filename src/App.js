import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import KanbanBoard from "./components/KanbanBoard/KanbanBoard";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import "./App.scss";
import Tasks from "./components/Tasks/Tasks";
import Table from "./components/TableComponent/TableComponent";
import TableTask from "./components/TableComponentTask/TableTask";

const App = () => {
  return (
    <Router>
      <div className="App">
        <SideNavBar />
        <div className="main-content">
          <TopNavBar />
          <main className="content">

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/overview"
                element={
                  <>
                    <KanbanBoard />
                    <Tasks />
                  </>
                }
              />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/table" element={<><Table />, <TableTask/></>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
