import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
	const [todos, setTodos] = useState([
		{ id: 1, text: "Learn React", completed: false },
		{ id: 2, text: "Build a React app", completed: false },
		{ id: 3, text: "Deploy the React app", completed: false },
	]);

	const handleTodoComplete = (id) => {
		const updatedTodos = todos.map((todo) =>
			todo.id === id ? { ...todo, completed: true } : todo
		);
		setTodos(updatedTodos);
	};

	return (
		<>
			<h1>Parent Component</h1>
			<Child todos={todos} onTodoComplete={handleTodoComplete} />
		</>
	);
};

export default Parent;
