import { useReducer } from 'react';

interface Count {
	count: number;
}

enum CounterActionType {
	INCREMENT = 'increment',
	DECREMENT = 'decrement',
}

interface CounterAction {
	type: CounterActionType;
}

// Reducer function that defines how the state changes
function reducer(state: Count, action: CounterAction) {
	switch (action.type) {
		case CounterActionType.INCREMENT:
			return { count: state.count + 1 };
		case CounterActionType.DECREMENT:
			return { count: state.count - 1 };
		default:
			throw new Error();
	}
}

export const Counter = () => {
	const initialState = { count: 0 };
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			Count: {state.count}
			<button onClick={() => dispatch({ type: CounterActionType.INCREMENT })}>
				+
			</button>
			<button onClick={() => dispatch({ type: CounterActionType.DECREMENT })}>
				-
			</button>
		</>
	);
};
