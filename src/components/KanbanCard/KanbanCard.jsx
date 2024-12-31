import React from 'react';
import styles from './KanbanCard.module.scss';
import { CiFolderOn } from 'react-icons/ci';
import { IoCalendarOutline } from 'react-icons/io5';
import { FaFilePdf } from "react-icons/fa6";

const KanbanCard = ({
  projectName,
  projectId,
  progress,
  status,
  startDate,
  endDate,
  profiles,
  fileCount,
  tag,

}) => {
  return (
    <div className={`${styles.card} ${styles[status.toLowerCase()]}`}>
   {tag && (
  <div
    className={styles.tag}
  
  >
    <img 
      src={`/images/${tag}.png`}
      alt={tag} 
      className={styles.tagImage}
    />
  </div>
)}

      <div className={styles.iconPludHead}>
        <div className={styles.left}>
          <CiFolderOn className={styles.folderIcon} />
          <h4>{projectName}</h4>
        </div>
        <p>ID: {projectId}</p>
      </div>

      <div className={styles.progressBarWrapper}>
        <span className={styles.progressLabelLeft}>07</span>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${progress}%` }}
          ></div>
          <span className={styles.progressText}>{progress}%</span>
        </div>
        <span className={styles.progressLabelRight}>14</span>
      </div>

      <div className={styles.date}>
        <IoCalendarOutline />
        <p>{startDate} - {endDate}</p>
      </div>
<hr className={styles.hrline}/>
      <div className={styles.details}>
        <div className={styles.leftSection}>
          {profiles?.map((profile, index) => (
            <img
              key={index}
              src={profile}
              alt={`Profile ${index + 1}`}
              className={styles.profileImage}
            />
          ))}
          <span className={styles.contebt}>12+</span>
        </div>
        <div className={styles.rightSection}>
          <FaFilePdf className={styles.fileIcon} />
          <p>{fileCount} files</p>
        </div>
      </div>
    </div>
  );
};

export default KanbanCard;
