import React, { useState } from "react";
import styles from "./TableTask.module.scss";
import { NavLink } from "react-router-dom";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  MdGridView,
  MdModeStandby,
  MdOutlineFilterAltOff,
} from "react-icons/md";
import { CiViewColumn } from "react-icons/ci";
import { BsViewList } from "react-icons/bs";
import { MdPeopleOutline } from "react-icons/md";
import { CiFolderOn } from "react-icons/ci";
import { BiTask } from "react-icons/bi";

const TableTask = () => {
  const data = [
    {
      id: 1,
      name: "Task Number 1",
      percentage: "Not Associated",
      owner: "Techyon",
      tasks: "10/20",
      status: "In Review",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
      expDate: "00-00-2024"
    },
    {
      id: 2,
      name: "Task Number 1",
      percentage: "Not Associated",
      owner: "Techyon",
      tasks: "10/20",
      status: "In Progress",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
           expDate: "00-00-2024"
    },
    {
      id: 3,
      name: "Task Number 1",
      percentage: "Not Associated",
      owner: "Techyon",
      tasks: "10/20",
      status: "Delayed",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
           expDate: "00-00-2024"
    },
    {
      id: 4,
      name: "Task Number 1",
      percentage: "Not Associated",
      owner: "Techyon",
      tasks: "10/20",
      status: "In Revision",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
           expDate: "00-00-2024"
    },
    {
      id: 5,
      name: "Task Number 1",
      percentage: "Not Associated",
      owner: "Techyon",
      tasks: "10/20",
      status: "In Review",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
           expDate: "00-00-2024"
    },
    {
      id: 6,
      name: "Task Number 1",
      percentage: "Not Associated",
      owner: "Techyon",
      tasks: "10/20",
      status: "In Review",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
           expDate: "00-00-2024"
    },
    {
      id: 7,
      name: "Task Number 1",
      percentage: "Not Associated",
      owner: "Techyon",
      tasks: "10/20",
      status: "In Review",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
           expDate: "00-00-2024"
    },
    {
      id: 8,
      name: "Task Number 1",
      percentage: "Not Associated",
      owner: "Techyon",
      tasks: "10/20",
      status: "In Review",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
           expDate: "00-00-2024"
    },
    {
      id: 9,
      name: "Task Number 1",
      percentage: "Not Associated",
      owner: "Techyon",
      tasks: "10/20",
      status: "In Review",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
           expDate: "00-00-2024"
    },
    {
      id: 10,
      name: "Task Number 1",
      percentage: "Not Associated",
      owner: "Techyon",
      tasks: "10/20",
      status: "In Review",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
           expDate: "00-00-2024"
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "In Review":
        return styles["status-not-started"];
      case "In Progress":
        return styles["status-in-progress"];
      case "Delayed":
        return styles["status-completed"];
      case "In Revision":
        return styles["status-archived"];
      default:
        return "";
    }
  };

  const [viewMode, setViewMode] = useState("grid");
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleViewMode = () => {
    setViewMode(viewMode === "grid" ? "list" : "grid");
  };

  const openAddProjectModal = () => {
    setShowAddProjectModal(true);
  };

  const closeAddProjectModal = () => {
    setShowAddProjectModal(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (option) => {
    alert(`You selected: ${option}`);
    setShowDropdown(false);
  };

  return (
    <>
   

      {/* Actions Section */}
      <div className={styles.actions}>
        <div className={styles.actionleft}>
          <p>All Tasks</p>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="26"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M15.7709 6.27466H4.2297C3.88354 6.27466 3.69025 6.64015 3.90463 6.88967L9.6752 13.581C9.84038 13.7725 10.1584 13.7725 10.3254 13.581L16.0959 6.88967C16.3103 6.64015 16.117 6.27466 15.7709 6.27466Z"
                fill="#2D446E"
              />
            </svg>
          </span>
        </div>

        <div className={styles.rytDiv}>
          <div className={styles.firtleft}>
            <BsViewList />
          </div>
          <button className={styles.toggleViewButton} onClick={toggleViewMode}>
            {viewMode === "grid" ? <MdGridView /> : <CiViewColumn />}
          </button>
          <div className={styles.firtleft}>
            <MdOutlineFilterAltOff />
          </div>

          {/* Three-Dot Menu */}
          <div className={styles.threeDot}>
            <BiDotsVerticalRounded onClick={toggleDropdown} />
            {showDropdown && (
              <div className={styles.dropdownMenu}>
                <ul>
                  <li onClick={() => handleOptionClick("Edit Project")}>
                    Edit Project
                  </li>
                  <li onClick={() => handleOptionClick("Delete Project")}>
                    Delete Project
                  </li>
                  <li onClick={() => handleOptionClick("View Details")}>
                    View Details
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles["table-container"]}>
        <table className={styles["custom-table"]}>
          <thead>
            <tr>
              <th>ID</th>
              <th className={styles.owner}>
                {" "}
                <CiFolderOn /> Project Name
              </th>
              <th> <MdPeopleOutline /> Associated Team</th>
              <th className={styles.owner}>
                <MdPeopleOutline /> Owner
              </th>
              
              <th>
                <MdModeStandby /> Status
              </th>
             
              <th>Start Date</th>
              <th>End Date</th>
              <th>
                <BiTask /> Exp. Strt Date
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.percentage}</td>
                <td className={styles.owner}>
                  <img
                    src="/images/png-profile.png"
                    alt="Owner Profile"
                    className={styles.profileImage}
                  />
                  {row.owner}
                </td>
                <td    className={`${styles.status} ${getStatusClass(row.status)}`}>
                  <div className={styles["progress-bar"]}>
                  <span
                 
                  >
                    {row.status}
                  </span>
            
                  </div>
                </td>
                
                <td>{row.startDate}</td>
                <td>{row.endDate}</td>
          <td>
                      {row.expDate}
             </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableTask;
