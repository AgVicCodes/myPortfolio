// import { useState } from 'react';






// const initialPosition = {
//     x: 0,
//     y: 0
// };

// export default function Canvas() {
//     const [shape, setShape] = useState({
//         color: 'orange',
//         position: initialPosition
//     });

//     function handleMove(dx, dy) {
//         setShape({
//             ...shape,
//             position: {
//                 x: shape.position.x + dx,
//                 y: shape.position.y + dy
//             }
//         })
//         // shape.position.x += dx;
//         // shape.position.y += dy;
//     }

//     function handleColorChange(e) {
//         setShape({
//         ...shape,
//         color: e.target.value
//         });
//     }

//     return (
//         <>
//         <select
//             value={shape.color}
//             onChange={handleColorChange}
//         >
//             <option value="orange">orange</option>
//             <option value="lightpink">lightpink</option>
//             <option value="aliceblue">aliceblue</option>
//         </select>
//         <Background
//             position={initialPosition}
//         />
//         <Box
//             color={shape.color}
//             position={shape.position}
//             onMove={handleMove}
//         >
//             Drag me!
//         </Box>
//         </>
//     );
// }

// // import { useState } from 'react';

// function Box({children, color, position, onMove}) {
//     const [lastCoordinates, setLastCoordinates] = useState(null);

//     function handlePointerDown(e) {
//         e.target.setPointerCapture(e.pointerId);
//         setLastCoordinates({
//         x: e.clientX,
//         y: e.clientY,
//         });
//     }

//     function handlePointerMove(e) {
//         if (lastCoordinates) {
//         setLastCoordinates({
//             x: e.clientX,
//             y: e.clientY,
//         });
//         const dx = e.clientX - lastCoordinates.x;
//         const dy = e.clientY - lastCoordinates.y;
//         onMove(dx, dy);
//         }
//     }

//     function handlePointerUp(e) {
//         setLastCoordinates(null);
//     }

//     return (
//         <div
//         onPointerDown={handlePointerDown}
//         onPointerMove={handlePointerMove}
//         onPointerUp={handlePointerUp}
//         style={{
//             width: 100,
//             height: 100,
//             cursor: 'grab',
//             backgroundColor: color,
//             position: 'absolute',
//             border: '1px solid black',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             transform: `translate(
//             ${position.x}px,
//             ${position.y}px
//             )`,
//         }}
//         >{children}</div>
//     );
// }

// function Background({position}) {
//     return (
//         <div style={{
//             position: 'absolute',
//             transform: `translate(${position.x}px,${position.y}px)`,
//             width: 250,
//             height: 250,
//             backgroundColor: 'rgba(200, 200, 0, 0.2)',
//         }} />
//     );
// };

// export default function Scoreboard() {
//     const [player, setPlayer] = useState({
//         firstName: 'Ranjani',
//         lastName: 'Shettar',
//         score: 10,
//     });

//     function handlePlusClick() {
        
//         player.score++

//         // Solution

//         // setPlayer({
//         //     ...player,
//         //     score: player.score + 1,
//         // });
//     }

//     function handleFirstNameChange(e) {
//         setPlayer({
//             ...player,
//             firstName: e.target.value,
//         });
//     }

//     function handleLastNameChange(e) {
//         setPlayer({
//             lastName: e.target.value
//         });
//     }

//     return (
//         <>
//             <label>
//                 Score: <b>{player.score}</b>
//                 {' '}
//                 <button className="bg-green-700 border-2 border-green-900 rounded-md text-gray-100 p-2" onClick={handlePlusClick}>
//                     +1
//                 </button>
//             </label>
//             <label>
//                 First name:
//                 <input className="border-2 border-neutral-300 text-gray-700 shadow-md rounded-md m-4 h-8"
//                     value={player.firstName}
//                     onChange={handleFirstNameChange}
//                 />
//             </label>
//             <label>
//                 Last name:
//                 <input className="border-2 border-neutral-300 text-gray-700 shadow-md rounded-md m-4 h-8"
//                     value={player.lastName}
//                     onChange={handleLastNameChange}
//                 />
//             </label>
//         </>
//     );
// }

// import { useState } from "react";

// function Button ({children, func}) {
//     return <button className="bg-green-700 border-2 border-green-900 rounded-md text-gray-100 p-2" onClick={func}>{children}</button>
// }

// // Changing 'nested' objects.  
// // Objects aren't really nested. They just point to each other
// // For example:

// export default function App () {
//     const [state, setState] = useState(false);
//     const [obj, setObj] = useState({
//         username: "Victor2357",
//         email: "agvictor@gmail.com",
//         skills: {
//             programming: "ReactJs",
//             design: "Figma",
//             vocation: "Fashion Design"
//         }     
//     });

//     // // Same as:
    
//     // let obj1 = {
//     //     programming: "ReactJs",
//     //     design: "Figma",
//     //     vocation: "Fashion Design"
//     // }
        
//     // let obj2 = {
//     //     username: "Victor2357",
//     //     email: "agvictor@gmail.com",
//     //     skills: obj1
//     // };


//     function randomize () {

//         state ? setObj({
//             ...obj,
//             email: "Caleb@gmail.com",
//             skills: {
//                 ...obj.skills,
//                 design: "Photoshop",
//                 vocation: "Pencil Sketch"
//             }
//         }) : setObj({
//             ...obj,
//             username: "Marvin",
//             skills: {
//                 ...obj.skills,
//                     programming: "Laravel",
//                     vocation: "Solar Installation"
//             }
//         })

//         // state?alert("State is default - FALSE!"):alert("State is changed - TRUE!")

//         setState(!state);

//         // alert("Clicked!");
        
        
//         // setObj({
//         //     ...obj,
//         //     username: "Marvin",
//         //     skills: {
//         //         ...obj.skills,
//         //         programming: "PHP"    
//         //     }
//         // });
//     }

//     // // This form of mutability works outside of react
//     // obj.username = "Marvin";
//     // obj.skills.programming = "C++";

//     // // But in react


//     return <>
//         <h1>Name: {obj.username}</h1>
//         <h1>Email: {obj.email}</h1>
//         <h1>Skills:</h1>
//         <ul>
//             <li>{obj.skills.programming}</li>
//             <li>{obj.skills.design}</li>
//             <li>{obj.skills.vocation}</li>
//         </ul>

//         <br />
//         <Button func={randomize}>Randomise</Button>
//     </>
// }



// {/* <button onClick={randomize} className="bg-blue-700 border-2 border-blue-900 rounded-md text-gray-100 m-2 p-2">Randomise</button> */}

// // function InputField({data}) {
    // //     return <>
    // //         <input className="border-2 border-neutral-300 text-gray-700 shadow-md rounded-md m-4 h-8" type="text" value={data} />
    // //     </>
// // }

// export default function Form () {
//     const [data, setData] = useState({
//         firstName: "Victor",
//         lastName: "Agbeleye",
//         email: "victoragbeleye@gmail.com"
//     });

//     function firstNameHandler(e) {
//         setData({
//             ...data,
//             firstName: e.target.value
//         });
//     }

//     function lastNameHandler(e) {
//         setData({
//             ...data,
//             lastName: e.target.value
//         });    
//     }

//     function emailHandler(e) {
//         setData({
//             ...data,
//             email: e.target.value
//         });    
//     }
    
//     // setData({
//     //     firstName: "Caleb",
//     //     lastName: "Olalekan"
//     // });

//     return <>
//         <form action="POST">
//             <input className="border-2 border-neutral-300 text-gray-700 shadow-md rounded-md m-4 h-8" type="text" value={data.lastName} onChange={lastNameHandler} />
//             <input className="border-2 border-neutral-300 text-gray-700 shadow-md rounded-md m-4 h-8" type="text" value={data.firstName} onChange={firstNameHandler} /><br />
//             <input className="border-2 border-neutral-300 text-gray-700 shadow-md rounded-md m-4 h-8" type="text" value={data.email} onChange={emailHandler} />
//             {/* <InputField  data={data.lastName} />
//             <InputField  data={data.firstName} /><br />
//             <InputField   data={data.email} /> */}

//             <h1>Hello there, I am {data.firstName} {data.lastName} and my email is {data.email} </h1>
//         </form>
//     </>

// }



// import { useState } from "react";

// // All Js value types can be stored in state
// // Moving Dot

// export default function MovingDot() {
//     const[position, setPosition] = useState({
//         x : 0, 
//         y : 0
//     });

//     return (<>
//         <div onPointerMove={ e => {
//             setPosition({
//                 x : e.clientX,
//                 y : e.clientY
//             });
//         }}  style={{
//             position: "relative",
//             width: '100vw',
//             height: '100vh',
//         }}> 
//             <div style={{
//                 position: "absolute",
//                 backgroundColor: "red",
//                 width: "20px",
//                 height: "20px",
//                 transform: `translate(${position.x}px, ${position.y}px)`,
//                 top: -20,
//                 left: -20
//             }}>
//             </div>
//         </div>
       
//     </>
//     )
// }
