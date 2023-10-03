// Passing event handlers as props
function Button({ onClick, children }) {
    return (<>
        <button className="bg-green-600 hover:bg-green-700 border-2 border-green-900 rounded-md mb-2 p-4" onClick={onClick}>
            {children}
        </button>
    </>
    );
}

// function PlayButtons () {

function PlayVideo ({message}) {

    function handleClick () {
        alert(message);
    }

    return <Button onClick={handleClick}>Video</Button>
}

function ReadAudio () {
    return <Button onClick={() => alert("Read Audiobook")}>Audio</Button>
}
// }

export default function Interact () {
    return (<>
        <PlayVideo message="Playing Video" /><br />
        <ReadAudio message="Reading Audiobook" />
    </>
);
}



// // Reading props in event handlers
// function Button({ message, children }) {
//     return (<>
//         <button className="bg-green-600 hover:bg-green-700 border-2 border-green-900 rounded-md mb-2 p-4" onClick={() => alert(message)}>
//             {children}
//         </button>
//     </>
//     );
// }

// export default function Interact () {
//     return (<>
//         <Button message="Playing Video">Play Video</Button><br />
//         <Button message="Reading Audiobook">Read AudioBook</Button>
//     </>
// );
// }



// function Clicker({ message, children }) {
//     return (
//     <button onClick={() => alert(message)} className="border-b-gray-300 bg-slate-400">
//         {children}
//     </button>
//     );
// }

// export default function Interact () {
//     return(
//         <Clicker message="I've been clicked again">
//             Click me
//         </Clicker>
//     );
// }




// export default function Interact() {
//     function handleclick() {
//         alert("I've been clicked!");
//     }
//     return (<>
//         <button onClick={handleclick} className="bg-gray-200 border-2 rounded-md border-slate-200 button">
//             Does nothing!
//         </button><br /><br />
//         <Button child="Hello" className="bg-gray-200 border-2 rounded-md border-slate-200 button"/>
//     </>);
// }


// // Declaring event handler functions inline
// function Button ({child}) {
//     return (
//         <button onClick={() => {alert("I'm clicked")}}>{child}</button>
//     )
// }


// Functions passed to event handlers must be passed not called 
// Correct
// {/* <button onClick={handleclick}></button> */}
// Incorrect
// {/* <button onClick={handleclick()}></button> */}

// function Button ({child}) {
//     return (
//         <button onClick={function handleClick() {
//             alert("I'm clicked");
//         }}>{child}</button>
//     )
// }








// Adding Event Handlers
// export function Button () {
//     return (
        
//     )
// }
