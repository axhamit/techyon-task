import React, { useState } from "react";
import styles from "./TopNavbar.module.scss";
import { FaSearch, FaBell } from "react-icons/fa";
import { PiSpeakerHighFill } from "react-icons/pi";
import { RiListSettingsLine } from "react-icons/ri";

const TopNavBar = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (icon) => {
    setActiveIcon(icon === activeIcon ? null : icon); 
  };

  return (
    <div className={styles.topnav}>
      <div className={styles.leftSection}>
        <div className={styles.brand}>TECHYON</div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.iucons}>
          <FaSearch
            className={`${styles.icon} ${
              activeIcon === "search" ? styles.active : ""
            }`}
            onClick={() => handleIconClick("search")}
          />
          <RiListSettingsLine
            className={`${styles.icon} ${
              activeIcon === "settings" ? styles.active : ""
            }`}
            onClick={() => handleIconClick("settings")}
          />
          <PiSpeakerHighFill
            className={`${styles.icon} ${
              activeIcon === "speaker" ? styles.active : ""
            }`}
            onClick={() => handleIconClick("speaker")}
          />
        </div>

        <div className={styles.notifications}>
          <FaBell
            className={`${styles.icon} ${
              activeIcon === "notifications" ? styles.active : ""
            }`}
            onClick={() => handleIconClick("notifications")}
          />
          <span className={styles.badge}>99+</span>
        </div>
        <div className={styles.profile}>
          <img
            src="/images/png-profile.png"
            alt="Profile"
            className={styles.profilePic}
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g opacity="0.6">
    <path d="M16.6 7.45837L11.1667 12.8917C10.525 13.5334 9.47502 13.5334 8.83336 12.8917L3.40002 7.45837" stroke="white" stroke-width="1.66667" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
