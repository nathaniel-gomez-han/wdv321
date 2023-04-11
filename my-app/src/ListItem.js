import React from 'react';
import './ListItem.css';

const ListItem = (props) => {
	const {index, item, listItems, setListItems} = props;
	const [showDeleteButton, setShowDeleteButton] = React.useState(false);

	const removeListItem = (index) => {
		setListItems([
			...listItems.slice(0, index),
			...listItems.slice(index+1, listItems.length)
		]);
	}

	const handleMouseEnter = () => {
		setShowDeleteButton(true);
	}

	const handleMouseLeave = () => {
		setShowDeleteButton(false);
	}

	return (
		<li
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<span>{item}</span>
			{showDeleteButton ?
				<button
					value={index}
					onClick={() => {
						removeListItem(index);
					}}
				>Delete</button>
				: null
			}
		</li>
	)
}

export default ListItem