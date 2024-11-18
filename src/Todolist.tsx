import { ChangeEvent, KeyboardEvent, useState } from "react";
import {FilterValuesType, TaskType} from "./App";
import {Button} from "./Button";

type PropsType = {
	title: string
	tasks: TaskType[]
	removeTask: (taskId: string) => void
	changeFilter: (filter: FilterValuesType) => void
	addTask: (taskTitle: string) => void
}

export const Todolist = ({title, tasks, removeTask, changeFilter, addTask}: PropsType) => {

	const [taskTitle, setTaskTitle] = useState<string>('')

	const addTaskHandler = () => {
		addTask(taskTitle)
		setTaskTitle('')
	}

	const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => setTaskTitle(event.currentTarget.value)

	const onKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			addTask(taskTitle)
			setTaskTitle('')
		}
	 }

	// const onAllChangeFilter = () => changeFilter('all')
	// const onActiveChangeFilter = () => changeFilter('active')
	// const onCompletedChangeFilter = () => changeFilter('completed')

	const onChangeFilterHandler = (value: FilterValuesType) => changeFilter(value)

	return (
		<div>
			<h3>{title}</h3>
			<div>
				<input value={taskTitle}
							 onChange={changeTaskTitleHandler} 
							 onKeyUp={onKeyUpHandler} />
				<Button title={'+'} 
								onClick={addTaskHandler}
					/>
			</div>
			{
				tasks.length === 0
					? <p>Тасок нет</p>
					: <ul>
						{tasks.map(task => {
							const removeTaskHandler = () => removeTask(task.id)

							return (
								<li key={task.id}>
									<input type="checkbox" checked={task.isDone}/>
									<span>{task.title}</span>
									<Button title={'x'} onClick={removeTaskHandler}/>
								</li>
							)
						})}
					</ul>
			}
			<div>
				<Button title={'All'} onClick={() => onChangeFilterHandler('all')}/>
				<Button title={'Active'} onClick={() => onChangeFilterHandler('active')}/>
				<Button title={'Completed'} onClick={() => onChangeFilterHandler('completed')}/>
			</div>
		</div>
	)
}
