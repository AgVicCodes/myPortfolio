import { useState } from "react";

function InputField(data) {
    return <>
        <input className="border-2 border-neutral-500 rounded-md m-4 h-8" type="text" value={data} />
    </>
}

export default function Form () {
    const [data, setData] = useState({
        firstName: "Victor",
        lastName: "Agbeleye"
    });

    // setData({
    //     firstName: "Caleb",
    //     lastName: "Olalekan"
    // });

    return <>
        <form action="POST">
            <InputField value={data.firstName} />
            <InputField value={data.firstName} />
        </form>
    </>

}











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
