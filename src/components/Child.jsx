import React from "react";

const Child = ({ todos, onTodoComplete }) => {
	return (
		<>
			<h2>Child Component</h2>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<span>{todo.text}</span>
						{!todo.completed && (
							<button onClick={() => onTodoComplete(todo.id)}>Complete</button>
						)}
					</li>
				))}
			</ul>
		</>
	);
};

export default Child;
