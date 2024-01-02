import { useState } from 'react';

interface Count {
	count: number;
}

export const SimpleCounter = () => {
	const initialState = { count: 0 };
	const [state, setState] = useState(initialState);

	return (
		<>
			Count: {state.count}
			<button onClick={() => setState((prevState: Count) => ({ count: prevState.count + 1 }))}>
				+
			</button>
			<button onClick={() => setState((prevState: Count) => ({ count: prevState.count - 1 }))}>
				-
			</button>
		</>
	);
};
