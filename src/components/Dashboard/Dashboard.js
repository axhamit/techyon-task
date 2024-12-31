import React from 'react';
import styles from './Dashboard.module.scss';
import KanbanBoard from '../KanbanBoard/KanbanBoard';
import Tasks from '../Tasks/Tasks';
import Table from '../TableComponent/TableComponent';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      {/* Summary Section */}
      <div className={styles.summary}>
        <h2>Welcome to the Dashboard</h2>
        <p>Here you can find an overview of your projects and tasks.</p>
        <div className={styles.summaryCards}>
          <div className={styles.card}>
            <h3>Total Projects</h3>
            <p>12</p>
          </div>
          <div className={styles.card}>
            <h3>Tasks Completed</h3>
            <p>45</p>
          </div>
          <div className={styles.card}>
            <h3>Pending Tasks</h3>
            <p>8</p>
          </div>
        </div>
      </div>


      <div className={styles.kanbanDemo}>
        <h3>Projects OverView</h3>
        <div className={styles.kanbanContainer}>
          <KanbanBoard /> 
        </div>
      </div>

      <div className={styles.kanbanDemo}>
        <h3>Tasks OverView</h3>
        <div className={styles.kanbanContainer}>
          <Tasks />
        </div>
      </div>


      <div className={styles.kanbanDemo}>
        <h3>Tasks table OverView</h3>
        <div className={styles.kanbanContainer}>
          <Table />
        </div>
      </div>
    </div>

  );
};

export default Dashboard;
