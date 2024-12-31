import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./SideNavBar.module.scss";
import { FaHome, FaProjectDiagram, FaTasks, FaChartBar, FaCog } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { CiRepeat, CiGrid41 } from "react-icons/ci";
import { MdOutlineSearchOff } from "react-icons/md";
import { CgArrowsScrollH } from "react-icons/cg";
import { FaFile } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdGridView, MdOutlineHelpCenter,MdOutlineFeedback  } from "react-icons/md";
import { FaPlus } from "react-icons/fa";



const SideNavBar = () => {
  const menuItems = [
    { icon: <FaHome />, tooltip: "Dashboard", path: "/" },
    { icon: <FaProjectDiagram />, tooltip: "Projects", path: "/overview" },
    { icon: <FaTasks />, tooltip: "Tasks", path: "/Tasks" },
    { icon: <CiGrid41 />, tooltip: "Grid View", path: "/table" },
    { icon: <CiRepeat />, tooltip: "Repeat", path: "" },
    { icon: <MdOutlineSearchOff />, tooltip: "Search", path: "" },
    { icon: <CgArrowsScrollH />, tooltip: "Search", path: "" },
    { icon: <FaFile />, tooltip: "Search", path: "" },
    { icon: <IoIosPeople />, tooltip: "Search", path: "" },

    { isSeparator: true },
    
    { icon: <MdGridView />, tooltip: "Grid", path: "" },
    { icon: <MdOutlineHelpCenter />, tooltip: "Help", path: "" },
    { icon: <MdOutlineFeedback />, tooltip: "FeedBack", path: "" },
  ];

  const [activeIndex, setActiveIndex] = useState(0); 
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);

  const openAddProjectModal = () => {
    setShowAddProjectModal(true);
  };

  const closeAddProjectModal = () => {
    setShowAddProjectModal(false);
  };

  return (
    <div className={styles.sidenav}>
      <div className={styles.iconDiv}>
        <FaBars className={styles.icon} />
      </div>
      <div className={styles.logo} onClick={openAddProjectModal}><FaPlus/></div>
      <ul className={styles.menu}>
        {menuItems.map((item, index) => (
          item.isSeparator ? (
            <hr key={`separator-${index}`} className={styles.separator} />
          ) : (
            <li
              key={index}
              className={`${styles.menuItem} ${activeIndex === index ? styles.active : ""}`}
              onClick={() => setActiveIndex(index)} 
            >
              <Link to={item.path} className={styles.icon}>
                {item.icon}
              </Link>
              <span className={styles.tooltip}>{item.tooltip}</span>
            </li>
          )
        ))}
      </ul>


      {showAddProjectModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>Add New Project</h3>
            <form>
              <label>Project Name</label>
              <input type="text" placeholder="Enter project name" />
              <label>Start Date</label>
              <input type="date" />
              <label>End Date</label>
              <input type="date" />
              <button type="submit">Add Project</button>
            </form>
            <button className={styles.closeModal} onClick={closeAddProjectModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideNavBar;
