import './App.css';
import { List } from './components/list.js';
import {Input} from './components/input.js'
import { Father } from './components/father.js';

// beta updates

function App() {

  return (
    <div className="App">

      <Father>
        <Input/>

        <List/>
      </Father>


    </div>
  );
}

export default App;
