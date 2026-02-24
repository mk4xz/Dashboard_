import React from 'react'
import './TasksFirstShape.css'
import { tasksForm1 } from "../../../data/ABUBAKR/projects/Projects"
import { tasksForm1Backlog } from "../../../data/ABUBAKR/projects/Projects"

const TasksFirstShape = () => {
  return (
    <div>
      <div className="tasks-title1">
        <h2 className='Active Tasks'>Active Tasks</h2>
      </div>

      <div className="task-active-container">
        {tasksForm1.map(task =>
          task.id === 1 ? (
            <div className='task-active-1' key={task.id}>
              <div className="taskName-addon">
                <p>Task Name</p>
                <h3>{task.taskName}</h3>
              </div>
              <div className="taskEstimate-addon">
                <p>Estimate</p>
                <h3>{task.estimate}</h3>
              </div>
              <div className='taskSpentTime-addon'>
                <p>Spent Time</p>
                <h3>{task.spentTime}</h3>
              </div>
              <div className="taskAssignee-addon">
                <p>Assignee</p>
                <img src={task.assignee} alt="" />
              </div>
              <div className="taskPriority-addon">
                <p>Priority</p>
                <h3>{task.priority}</h3>
              </div>
              <button className='task-active-btn-1'>Done</button>

            </div>
          ) : null
        )}

        {tasksForm1.map(task =>
          task.id === 2 ? (
            <div className='task-active-2' key={task.id}>
              <div className="taskName-addon">
                <p>Task Name</p>
                <h3>{task.taskName}</h3>
              </div>
              <div className="taskEstimate-addon">
                <p>Estimate</p>
                <h3>{task.estimate}</h3>
              </div>
              <div className='taskSpentTime-addon'>
                <p>Spent Time</p>
                <h3>{task.spentTime}</h3>
              </div>
              <div className="taskAssignee-addon">
                <p>Assignee</p>
                <img src={task.assignee} alt="" />
              </div>
              <div className="taskPriority-addon">
                <p>Priority</p>
                <h3>{task.priority}</h3>
              </div>
              <button className='task-active-btn-2'>In Progress</button>

            </div>
          ) : null
        )}


        {tasksForm1.map(task =>
          task.id === 3 ? (
            <div className='task-active-3' key={task.id}>
              <div className="taskName-addon">
                <p>Task Name</p>
                <h3>{task.taskName}</h3>
              </div>
              <div className="taskEstimate-addon">
                <p>Estimate</p>
                <h3>{task.estimate}</h3>
              </div>
              <div className='taskSpentTime-addon'>
                <p>Spent Time</p>
                <h3>{task.spentTime}</h3>
              </div>
              <div className="taskAssignee-addon">
                <p>Assignee</p>
                <img src={task.assignee} alt="" />
              </div>
              <div className="taskPriority-addon">
                <p>Priority</p>
                <h3>{task.priority}</h3>
              </div>
              <button className='task-active-btn-2'>In Progress</button>

            </div>
          ) : null
        )}

        {tasksForm1.map(task =>
          task.id === 4 ? (
            <div className='task-active-4' key={task.id}>
              <div className="taskName-addon">
                <p>Task Name</p>
                <h3>{task.taskName}</h3>
              </div>
              <div className="taskEstimate-addon">
                <p>Estimate</p>
                <h3>{task.estimate}</h3>
              </div>
              <div className='taskSpentTime-addon'>
                <p>Spent Time</p>
                <h3>{task.spentTime}</h3>
              </div>
              <div className="taskAssignee-addon">
                <p>Assignee</p>
                <img src={task.assignee} alt="" />
              </div>
              <div className="taskPriority-addon">
                <p>Priority</p>
                <h3>{task.priority}</h3>
              </div>
              <button className='task-active-btn-3'>To Do</button>

            </div>
          ) : null
        )}

        {tasksForm1.map(task =>
          task.id === 5 ? (
            <div className='task-active-5' key={task.id}>
              <div className="taskName-addon">
                <p>Task Name</p>
                <h3>{task.taskName}</h3>
              </div>
              <div className="taskEstimate-addon">
                <p>Estimate</p>
                <h3>{task.estimate}</h3>
              </div>
              <div className='taskSpentTime-addon'>
                <p>Spent Time</p>
                <h3>{task.spentTime}</h3>
              </div>
              <div className="taskAssignee-addon">
                <p>Assignee</p>
                <img src={task.assignee} alt="" />
              </div>
              <div className="taskPriority-addon">
                <p>Priority</p>
                <h3>{task.priority}</h3>
              </div>
              <button className='task-active-btn-4'>In Review</button>

            </div>
          ) : null
        )}

        {tasksForm1.map(task =>
          task.id === 6 ? (
            <div className='task-active-6' key={task.id}>
              <div className="taskName-addon">
                <p>Task Name</p>
                <h3>{task.taskName}</h3>
              </div>
              <div className="taskEstimate-addon">
                <p>Estimate</p>
                <h3>{task.estimate}</h3>
              </div>
              <div className='taskSpentTime-addon'>
                <p>Spent Time</p>
                <h3>{task.spentTime}</h3>
              </div>
              <div className="taskAssignee-addon">
                <p>Assignee</p>
                <img src={task.assignee} alt="" />
              </div>
              <div className="taskPriority-addon">
                <p>Priority</p>
                <h3>{task.priority}</h3>
              </div>
              <button className='task-active-btn-2'>In Progress</button>

            </div>
          ) : null
        )}
      </div>

      <div className="tasks-title2">
        <h2 className='Backlog'>Backlog</h2>
      </div>

      <div className="tasks-backlog-container">
        {tasksForm1Backlog.map(task =>
          task.id === 1 ? (
            <div className='task-active-1' key={task.id}>
              <div className="taskName-addon">
                <p>Task Name</p>
                <h3>{task.taskName}</h3>
              </div>
              <div className="taskEstimate-addon">
                <p>Estimate</p>
                <h3>{task.estimate}</h3>
              </div>
              <div className='taskSpentTime-addon'>
                <p>Spent Time</p>
                <h3>{task.spentTime}</h3>
              </div>
              <div className="taskAssignee-addon">
                <p>Assignee</p>
                <img src={task.assignee} alt="" />
              </div>
              <div className="taskPriority-addon">
                <p>Priority</p>
                <h3>{task.priority}</h3>
              </div>

            </div>
          ) : null
        )}

        {tasksForm1Backlog.map(task =>
          task.id === 2 ? (
            <div className='task-active-2' key={task.id}>
              <div className="taskName-addon">
                <p>Task Name</p>
                <h3>{task.taskName}</h3>
              </div>
              <div className="taskEstimate-addon">
                <p>Estimate</p>
                <h3>{task.estimate}</h3>
              </div>
              <div className='taskSpentTime-addon'>
                <p>Spent Time</p>
                <h3>{task.spentTime}</h3>
              </div>
              <div className="taskAssignee-addon">
                <p>Assignee</p>
                <img src={task.assignee} alt="" />
              </div>
              <div className="taskPriority-addon">
                <p>Priority</p>
                <h3>{task.priority}</h3>
              </div>

            </div>
          ) : null
        )}
      </div>
    </div>
  )
}

export default TasksFirstShape
