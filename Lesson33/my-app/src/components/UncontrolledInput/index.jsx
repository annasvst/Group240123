export const UncontrolledInput = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const inputValue = event.target.elements.input.value;
		console.log('Submitted value:', inputValue);
	};

	return (
		<> 
			<h2>Uncontrolled Input</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Uncontrolled Input:
					<input
						type='text'
						name='input'
						// Default value not needed but could be used
						defaultValue="Some default value"
					/>
				</label>
				<button type='submit'>Submit</button>
			</form>
		</>
	);
};
