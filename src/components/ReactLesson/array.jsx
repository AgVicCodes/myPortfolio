// import { useState } from "react"; 







// // The right way

// export default function Array() {
    
//     let nextId = 0;

//     const [name, setName] = useState("Victor");
//     const [artist, setArtist] = useState([]);
    
//     return (
//         <div>
//             <h1>Artists of the Century</h1>
//             <input type="text" className="border-2 border-green-900 rounded-md text-gray-800 p-2 mr-4" value={name} 
//             onChange={(e) => setName(e.target.value)}/>
//             <button className="bg-green-700 border-2 border-green-900 rounded-md text-gray-100 p-2" onClick={() => {
//                 setArtist([
//                     ...artist,
//                     {
//                         id: nextId,
//                         name: name
//                     }
//                 ])
//             }}>
//                 Add
//             </button>
//             <ul>
//                 {artist.map(artist => (
//                     <li key={artist.id}>
//                         {artist.name}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }


// // Mutating the button Function

// export default function Array() {
    
//     let nextId = 0;

//     const [name, setName] = useState("Victor");
//     const [artist, setArtist] = useState([]);
    
//     return (
//         <div>
//             <h1>Artists of the Century</h1>
//             <input type="text" className="border-2 border-green-900 rounded-md text-gray-800 p-2 mr-4" value={name} 
//             onChange={(e) => setName(e.target.value)}/>
//             <button className="bg-green-700 border-2 border-green-900 rounded-md text-gray-100 p-2" onClick={() => {
//                 artist.push({
//                     id: nextId++,
//                     name: name
//                 });
//             }}>
//                 Add
//             </button>
//             <ul>
//                 {artist.map(artist => (
//                     <li key={artist.id}>
//                         {artist.name}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
