import { useState, useEffect } from 'react';
import './card.css';

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    const [update, setUpdate] = useState(0);

    const hendleUpdate = () => setUpdate(update + 1);

    useEffect(() => {
        const request = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums');
            const data = await response.json();
            setAlbums(data.slice(0, 20));
        }

        request();
    }, [update])

    return (
        <div className="card">
            <h1>Albums: {albums.length}</h1>
            <button onClick={hendleUpdate}>Update</button>

            <ul>
                {albums.map(noteItem => <li key={noteItem.id}>{noteItem.title}</li>)}
            </ul>
        </div>
    )
}

export default Albums;