const Input = (props) => {
	const {name, ...rest} = props;
	return (
		<input
			{...rest}
		/>
	)
}

export default Input