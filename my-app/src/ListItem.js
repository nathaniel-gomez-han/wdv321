import React from 'react';
import './ListItem.css';

const ListItem = (props) => {
	const {item} = props;

	return (
		<li>
			<div>{item}</div>
			<button>Delete</button>
		</li>
	)
}

export default ListItem