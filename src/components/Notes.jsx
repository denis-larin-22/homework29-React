import { useState, useEffect } from 'react';
import './card.css';

const Card = () => {
    const [notes, setNote] = useState([]);
    const [update, setUpdate] = useState(0);

    const hendleUpdate = () => setUpdate(update + 1);

    useEffect(() => {
        const request = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            setNote(data.slice(0, 20));
        }

        request();
    }, [update])

    return (
        <div className="card">
            <h1>Notes: {notes.length}</h1>
            <button onClick={hendleUpdate}>Update</button>

            <ul>
                {notes.map(noteItem => <li key={noteItem.id}>{noteItem.title}</li>)}
            </ul>
        </div>
    )
}

export default Card;