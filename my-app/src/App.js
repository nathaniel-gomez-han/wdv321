import './App.css';
import React from 'react';

function App() {
	const [listItems, setListItems] = React.useState([]);

	return (
		<div>
			<ul>
				{
					listItems.map((item, i) => <li key={i}>{item}</li>)
				}
			</ul>
			<input
				onChange={(event) => {
					setListItems([event.target.value]);
					console.log(event.target.value);
				}}

			/>
		</div>
	);
}

export default App;
