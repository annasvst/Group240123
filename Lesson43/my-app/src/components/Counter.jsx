import { useCounter } from '../hooks/counter';

export const CounterComponent = () => {
  const [count, decrease, increase, reset] = useCounter();
  return (
    <div>
      <div>{count}</div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
