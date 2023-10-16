import { useState } from "react";

export default function Array() {
    
    let nextId = 0;

    const [name, setName] = useState("Victor");
    const [artist, setArtist] = useState([]);
    
    return (
        <div>
            <h1>Artists of the Century</h1>
            <input type="text" name={name} />
            <button className="bg-green-700 border-2 border-green-900 rounded-md text-gray-100 p-2"></button>
        </div>
    )
}
