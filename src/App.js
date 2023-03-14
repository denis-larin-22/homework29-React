import './App.css';
import Card from './components/Card';
import { useState } from 'react';


const App = () => {
  const [isHidden, setIsHidden] = useState(false);
  const toggleVisible = () => setIsHidden(!isHidden);

  return(
    <div>
      <button onClick={toggleVisible}>Toggle</button>

      {isHidden ? <Card/> : null}
    </div>
  )
}

export default App;
