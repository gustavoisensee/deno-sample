import React from 'https://dev.jspm.io/react';

const list = [
  'Banana', 'Apple', 'Strawberry'
];

const App = () => (
  <>
    <div>Hello Deno React</div>
    {list.map((l, i) => <h3 key={i}>{l}</h3>)}
  </>
);

export default App;