import React from 'react'
import './Projects.css'
import TasksFirstShape from './projectsComponents/TasksFirstShape'
import TasksSecondShape from './projectsComponents/TasksSecondShape'
import TasksThirdShape from './projectsComponents/TasksThirdShape'
import { useState } from 'react'
import taskIcon1 from './icons/task-icon-1.png'
import taskIcon2 from './icons/task-icon-2.png'
import taskIcon3 from './icons/task-icon-3.png'
import taskIcon4 from './icons/task-filter-icon.png'

const Projects = () => {
  const [activeForm, setActiveForm] = useState(1);

  return (
    <div>
      <div className="project-addon">
        <h1 className='project-title'>Projects</h1>
        <button className='add-new-project'>+ Add Project</button>
      </div>

      <div style={{ display: 'flex' }}>
        <div className="current-project">
          <h1 className='current-project-title'>Current Projects</h1>

          <div className="current-project-div-1">
            <p className='c-project-num'>PN0001245</p>
            <h1 className='c-project-name'>Medical App (iOS native)</h1>
            <p className='c-project-more'>View details</p>
          </div>
          <div className="current-project-div-2">
            <p className='c-project-num'>PN0001245</p>
            <h1 className='c-project-name'>Food Delivery Service</h1>
          </div>
          <div className="current-project-div-3">
            <p className='c-project-num'>PN0001245</p>
            <h1 className='c-project-name'>Fortune website</h1>
          </div>
          <div className="current-project-div-4">
            <p className='c-project-num'>PN0001245</p>
            <h1 className='c-project-name'>Planner App</h1>
          </div>
          <div className="current-project-div-5">
            <p className='c-project-num'>PN0001245</p>
            <h1 className='c-project-name'>Time tracker - personal account</h1>
          </div>
          <div className="current-project-div-6">
            <p className='c-project-num'>PN0001245</p>
            <h1 className='c-project-name'>Internal Project</h1>
          </div>
        </div>

        <div className='tasks-add'>
          <div className="tasks-addon">
            <h1 className='tasks-title'>Tasks</h1>

            <div className="tasks-addon-icons">
              <button onClick={() => setActiveForm(1)}> <img src={taskIcon1} alt="img" /> </button>
              <button onClick={() => setActiveForm(2)}> <img src={taskIcon2} alt="img" /> </button>
              <button onClick={() => setActiveForm(3)}> <img src={taskIcon3} alt="img" /> </button>
            </div>

            <button className='filter-btn'> <img src={taskIcon4} alt="img" /> </button>
          </div>

          <div>
            {activeForm === 1 && <TasksFirstShape />}
            {activeForm === 2 && <TasksSecondShape />}
            {activeForm === 3 && <TasksThirdShape />}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects
