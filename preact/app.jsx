/** @jsx h */
import { h } from 'https://cdn.pika.dev/preact@^10.3.0';

const list = [
  'Banana', 'Apple', 'Strawberry'
];

const App = () => (
  <div>
    <div>Hello Deno Preact</div>
    {list.map((l, i) => <h3 key={i}>{l}</h3>)}
  </div>
);

export default App;