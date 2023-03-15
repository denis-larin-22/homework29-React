import './App.css';
import Notes from './components/Notes';
import Users from './components/Users';
import Albums from './components/Albums';
import { useState } from 'react';


const App = () => {
  const [isHiddenNotes, setIsHiddenNotes] = useState(false);
  const toggleVisibleNotes = () => setIsHiddenNotes(!isHiddenNotes);

  const [isHiddenUsers, setIsHiddenUsers] = useState(false);
  const toggleVisibleUsers = () => setIsHiddenUsers(!isHiddenUsers);

  const [isHiddenAlbums, setIsHiddenAlbums] = useState(false);
  const toggleVisibleAlbums = () => setIsHiddenAlbums(!isHiddenAlbums);

  return(
    <div>
      <button onClick={toggleVisibleNotes}>Notes</button>
      <button onClick={toggleVisibleUsers}>Users</button>
      <button onClick={toggleVisibleAlbums}>Albums</button>

      <div className="wrap">
        {isHiddenNotes ? <Notes/> : null}
        {isHiddenUsers ? <Users/> : null}
        {isHiddenAlbums ? <Albums/> : null}
      </div>
    </div>
  )
}

export default App;
