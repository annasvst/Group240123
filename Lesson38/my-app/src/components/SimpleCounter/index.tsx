import { useState } from 'react';

interface Count {
	count: number;
}

export const SimpleCounter = () => {
	const initialState = { count: 0 };
	const [state, setState] = useState(initialState);

	function handeIncrease () {
		setState((prevState: Count) => (
			{ count: prevState.count + 1 }
		));
	}

	return (
		<>
			Count: {state.count}
			<button onClick={handeIncrease}>
				+
			</button>
			<button onClick={() => setState((prevState: Count) => ({ count: prevState.count - 1 }))}>
				-
			</button>
		</>
	);
};
