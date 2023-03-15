import { useState, useEffect } from 'react';
import './card.css';

const Users = () => {
    const [countUsers, setCountUsers] = useState([]);
    const [update, setUpdate] = useState(0);

    const hendleUpdate = () => setUpdate(update + 1);

    useEffect(() => {
        const request = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setCountUsers(data);
        }

        request();
    }, [update])

    return (
        <div className="card">
            <h1>Users: {countUsers.length}</h1>
            <button onClick={hendleUpdate}>Update</button>

            <ul>
                {countUsers.map(noteItem => <li key={noteItem.id}>{noteItem.name}</li>)}
            </ul>
        </div>
    )
}

export default Users;