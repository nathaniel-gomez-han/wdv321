import './App.css';

function App() {
	let todoListItems = [
		'Laundry',
		'Dishes',
		'Sweep the floor',
		'Feed my cats',
		'Clean the shower',
		'Random task A',
		'Another task'
	];

	return (
		<div>
			<ul>
				{
					todoListItems.map((item, i) => <li key={i}>{item}</li>)
				}
			</ul>
			<input
				onChange={(event) => {
					console.log(event.target.value);
				}}

			/>
		</div>
	);
}

export default App;
