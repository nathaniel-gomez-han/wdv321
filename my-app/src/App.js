import './App.css';
import ListItem from './ListItem';
import React from 'react';

function App() {
	const [userEnteredTodo, setUserEnteredTodo] = React.useState('');
	const [listItems, setListItems] = React.useState([]);

	const saveItemAndClearInput = () => {
		setListItems([
			...listItems,
			userEnteredTodo
		]);

		setUserEnteredTodo('');
	}

	return (
		<div>
			<ul>
				{
					listItems.map((item, index) => {
						return (
							<ListItem
								key={index}
								index={index}
								item={item}
								listItems={listItems}
								setListItems={setListItems}
							/>
						)
					})
				}
			</ul>
			<input
				onChange={(event) => {
					setUserEnteredTodo([event.target.value]);
				}}
				onKeyDown={(event) => {
					if (event.code === 'Enter') {
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
