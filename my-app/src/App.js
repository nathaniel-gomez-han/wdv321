import './App.css';
import React from 'react';

function App() {
	const [userEnteredTodo, setUserEnteredTodo] = React.useState();
	const [listItems, setListItems] = React.useState([]);

	const saveItemAndClearInput = () => {
		setListItems([
			...listItems,
			userEnteredTodo
		]);

		setUserEnteredTodo("");
	}

	return (
		<div>
			<ul>
				{
					listItems.map((item, i) => <li key={i}>{item}</li>)
				}
			</ul>
			<input
				onChange={(event) => {
					setUserEnteredTodo([event.target.value]);
					console.log(event.target.value);
				}}
				onKeyDown={(event) => {
					if (event.code === "Enter") {
						saveItemAndClearInput();
					}
				}}
				value={userEnteredTodo}
			/>
			<button
				onClick={saveItemAndClearInput}
				>Add</button>
		</div>
	);
}

export default App;
