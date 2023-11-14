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
					<input type='text' name='input' defaultValue="Enter your data..."/>
				</label>
				<button type='submit'>Submit</button>
			</form>
		</>
	);
};
