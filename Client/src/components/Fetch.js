import React, { useEffect, useState } from 'react';
import { getUsers } from '../helper';

export default function Fetch() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getUsers().then(data => setItems(data));
    }, []);

    return (
        <div>
            <div className="row cardContainer">
                {items.map((item, index) => (
                    <h3 key={index}>{item.name}</h3>
                ))}
            </div>
        </div>
    );
}
