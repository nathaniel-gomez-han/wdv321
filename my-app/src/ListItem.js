import React from 'react';
import './ListItem.css';

const ListItem = ({index, item, onDelete}) => {
	return (
		<li>
			<span>{item}</span>
			<button
				value={index}
				onClick={() => {
					onDelete(index);
				}}
			>Delete</button>
		</li>
	)
}

export default ListItem