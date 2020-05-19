import { React } from '../deps.ts';

const list = [
  'Banana', 'Apple', 'Strawberry'
];

const App = () => {
  const handleClick = () => alert('test');

  return (
    <>
      <div>Hello Deno React</div>
      {list.map((l, i) => <h3 key={i}>{l}</h3>)}
      <button onClick={handleClick}>Button test</button>
    </>
  );
};

export default App;