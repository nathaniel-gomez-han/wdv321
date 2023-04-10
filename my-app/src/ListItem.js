import React from 'react';
import './ListItem.css';

const ListItem = ({index, item, listItems, setListItems}) => {
	const removeListItem = (index) => {
		setListItems([
			...listItems.slice(0, index),
			...listItems.slice(index+1, listItems.length)
		]);
	}

	return (
		<li>
			<span>{item}</span>
			<button
				value={index}
				onClick={() => {
					removeListItem(index);
				}}
			>Delete</button>
		</li>
	)
}

export default ListItem