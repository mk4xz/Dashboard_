import React from 'react'
import './TasksSecondShape.css'
import { tasksForm2 } from '../../../data/ABUBAKR/projects/Projects'
import { tasksForm2Backlog } from '../../../data/ABUBAKR/projects/Projects'

const TasksSecondShape = () => {
  return (
    <div>
      <div className="tasks-first-addon">
        <div className="tasks-div">To Do</div>
        <div className="tasks-div">In Progress</div>
        <div className="tasks-div">in Review</div>
        <div className="tasks-div">Done</div>
      </div>

      <div className="tasks-title1">
        <h2 className='Active Tasks'>Active Tasks</h2>
      </div>

      <div className="active-tasks-container">
        <div className="active-tasks-row-1">
          {tasksForm2
            .filter(task => task.id === 1)
            .map(task => (
              <div className='active-task-div-1' key={task.id}>
                <p className='task-num'>TS0001245</p>
                <h3 className='taskName'>{task.taskName}</h3>

                <div className='task-container-addon'>
                  <div><h3>{task.spentTime}</h3></div>
                  <img className='tasks-active-img-1' src={task.assignee} alt="img" />
                </div>
              </div>
            ))}

          {tasksForm2
            .filter(task => task.id === 2)
            .map(task => (
              <div className='active-task-div-2' key={task.id}>
                <p className='task-num'>TS0001245</p>
                <h3 className='taskName'>{task.taskName}</h3>

                <div className='task-container-addon'>
                  <div><h3>{task.spentTime}</h3></div>
                  <img className='tasks-active-img-2' src={task.assignee} alt="img" />
                </div>
              </div>
            ))}

          {tasksForm2
            .filter(task => task.id === 3)
            .map(task => (
              <div className='active-task-div-3' key={task.id}>
                <p className='task-num'>TS0001245</p>
                <h3 className='taskName'>{task.taskName}</h3>

                <div className='task-container-addon'>
                  <div><h3>{task.spentTime}</h3></div>
                  <img className='tasks-active-img-3' src={task.assignee} alt="img" />
                </div>
              </div>
            ))}

          {tasksForm2
            .filter(task => task.id === 4)
            .map(task => (
              <div className='active-task-div-4' key={task.id}>
                <p className='task-num'>TS0001245</p>
                <h3 className='taskName'>{task.taskName}</h3>

                <div className='task-container-addon'>
                  <div><h3>{task.spentTime}</h3></div>
                  <img className='tasks-active-img-4' src={task.assignee} alt="img" />
                </div>
              </div>
            ))}
        </div>

        <div className="active-tasks-row-2">
          {tasksForm2
            .filter(task => task.id === 5)
            .map(task => (
              <div className='active-task-div-5' key={task.id}>
                <p className='task-num'>TS0001245</p>
                <h3 className='taskName'>{task.taskName}</h3>

                <div className='task-container-addon'>
                  <div><h3>{task.spentTime}</h3></div>
                  <img className='tasks-active-img-5' src={task.assignee} alt="img" />
                </div>
              </div>
            ))}

          {tasksForm2
            .filter(task => task.id === 6)
            .map(task => (
              <div className='active-task-div-6' key={task.id}>
                <p className='task-num'>TS0001245</p>
                <h3 className='taskName'>{task.taskName}</h3>

                <div className='task-container-addon'>
                  <div><h3>{task.spentTime}</h3></div>
                  <img className='tasks-active-img-6' src={task.assignee} alt="img" />
                </div>
              </div>
            ))}
        </div>

        <div className="active-tasks-row-3">
          {tasksForm2
            .filter(task => task.id === 7)
            .map(task => (
              <div className='active-task-div-7' key={task.id}>
                <p className='task-num'>TS0001245</p>
                <h3 className='taskName'>{task.taskName}</h3>

                <div className='task-container-addon'>
                  <div><h3>{task.spentTime}</h3></div>
                  <img className='tasks-active-img-7' src={task.assignee} alt="img" />
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="tasks-backlog">
        <h2 className='backlog-title-1'>Backlog</h2>

        <div className="backlog-row">
          {tasksForm2Backlog
            .filter(task => task.id === 1)
            .map(task => (
              <div className='backlog-task-div-1' key={task.id}>
                <p className='backlog-num'>TS0001245</p>
                <h3 className='backlogName'>{task.taskName}</h3>

                <div className='backlog-container-addon'>
                  <div><h3>{task.spentTime}</h3></div>
                  <img className='backlog-active-img-1' src={task.assignee} alt="img" />
                </div>
              </div>
            ))}

            {tasksForm2Backlog
            .filter(task => task.id === 2)
            .map(task => (
              <div className='backlog-task-div-2' key={task.id}>
                <p className='backlog-num'>TS0001245</p>
                <h3 className='backlogName'>{task.taskName}</h3>

                <div className='backlog-container-addon'>
                  <div><h3>{task.spentTime}</h3></div>
                  <img className='backlog-active-img-2' src={task.assignee} alt="img" />
                </div>
              </div>
            ))}

            {tasksForm2Backlog
            .filter(task => task.id === 3)
            .map(task => (
              <div className='backlog-task-div-3' key={task.id}>
                <p className='backlog-num'>TS0001245</p>
                <h3 className='backlogName'>{task.taskName}</h3>

                <div className='backlog-container-addon'>
                  <div><h3>{task.spentTime}</h3></div>
                  <img className='backlog-active-img-3' src={task.assignee} alt="img" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default TasksSecondShape
