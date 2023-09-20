// import { getFinalState } from './processQueue.js';
function increment(n) {Edited JSX
    return n + 1;
}

increment.toString = () => 'n => n+1';

function TestCase({
    baseState,
    queue,
    expected
    }) {

    const actual = getFinalState(baseState, queue);
    
    return (
        <>
            <p>Base state: <b>{baseState}</b></p>
            <p>Queue: <b>[{queue.join(', ')}]</b></p>
            <p>Expected result: <b>{expected}</b></p>
            <p style={{
                color: actual === expected ?
                'green' :
                'red'
            }}>
                Your result: <b>{actual}</b>
                {' '}
                ({actual === expected ?
                'correct' :
                'wrong'
                })
            </p>
        </>
    );
}

function getFinalState(baseState, queue) {
    let finalState = baseState;
  
    for (let update of queue) {
        if (typeof update === 'function') {
            // Apply the updater function.
            finalState = update(finalState);
        } else {
            // Replace the next state.
            finalState = update;
        }
    }
  
    return finalState;
}
  


export default function App() {
    return (
        <>
            <TestCase
                baseState={1}
                queue={[2, 3, 5]}
                expected={5}
            />
            <hr />
            <TestCase
                baseState={5}
                queue={[
                increment,
                increment,
                increment
                ]}
                expected={8}
            />
            <hr />
            <TestCase
                baseState={0}
                queue={[
                5,
                increment,
                ]}
                expected={6}
            />
            <hr />
            <TestCase
                baseState={0}
                queue={[
                5,
                increment,
                42,
                ]}
                expected={42}
            />
        </>
    );
}


// export function getFinalState(baseState, queue) {
//     let finalState = baseState;
  
//     // TODO: do something with the queue...
  
//     return finalState;
// }  






// import { useState } from 'react';

// export default function RequestTracker() {
//     const [pending, setPending] = useState(0);
//     const [completed, setCompleted] = useState(0);

//     async function handleClick() {
//         setPending(pending + 1);
//         await delay(3000);
//         setPending(p => p - 1);
//         setCompleted(c => c + 1);
//     }

//     return (
//         <>
//             <h3>
//                 Pending: {pending}
//             </h3>
//             <h3>
//                 Completed: {completed}
//             </h3>
//             <button onClick={handleClick}>
//                 Buy     
//             </button>
//         </>
//     );
// }

// function delay(ms) {
//     return new Promise(resolve => {
//         setTimeout(resolve, ms);
//     });
// }



// Queueing

// import { useState } from 'react';

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(number + 5);
//         setNumber(n => n + 1);
//         setNumber(42);
//       }}>Increase the number</button>
//     </>
//   )
// }


// import { useState } from 'react';

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(number + 5);
//         setNumber(n => n + 1);
//       }}>Increase the number</button>
//     </>
//   )
// }



// import { useState } from 'react';

// export default function TrafficLight() {
//     const [walk, setWalk] = useState(true);

//     function handleClick() {
//         setWalk(!walk);
//         alert( walk ? "Stop is next!" : "Walk is next!")
//         // if(walk) {
//         //     alert("Stop is next!")
//         // } else {
//         //     alert("Walk is next!")
//         // }
//     }

//     return (
//         <>
//             <button onClick={handleClick}>
//                 Change to {walk ? 'Stop' : 'Walk'}
//             </button>
//             <h1 style={{
//                 color: walk ? 'darkgreen' : 'darkred'
//             }}>
//                 {walk ? 'Walk' : 'Stop'}
//             </h1>
//         </>
//     );
// }


// export default function FeedbackForm() { 

//     function handleClick() {
//         const name = (prompt("What is your name?"));
//         alert(`Hello, ${name}!`);
//     }
     
//     return (
//         <button onClick={handleClick}>
//             Greet
//         </button>
//     );
// }

// Removing unnecessary state

// import { useState } from 'react';

// export default function FeedbackForm() {
//     const [name, setName] = useState("");

//     function handleClick() {
//         setName(prompt("What is your name?"));
//         alert(`Hello, ${name}!`);
//     }
    
    
//     return (
//         <button onClick={handleClick}>
//             Greet
//         </button>
//     );
// }





// Hooks can only be called at the top level of the component function. Here, 
// the first isSent definition follows this rule, but the message definition 
// is nested in a condition.

// import { useState } from 'react';

// export default function FeedbackForm() {
//   const [isSent, setIsSent] = useState(false);
//   const [message, setMessage] = useState('');

//   if (isSent) {
//     return <h1>Thank you!</h1>;
//   } else {
//     return (
//       <form onSubmit={e => {
//         e.preventDefault();
//         alert(`Sending: "${message}"`);
//         setIsSent(true);
//       }}>
//         <textarea
//           placeholder="Message"
//           value={message}
//           onChange={e => setMessage(e.target.value)}
//         />
//         <br />
//         <button type="submit">Send</button>
//       </form>
//     );
//   }
// }



// import { useState } from 'react';

// export default function FeedbackForm() {
//     const [isSent, setIsSent] = useState(false);
//     const [message, setMessage] = useState('');
//     if (isSent) {
//         return <h1>Thank you!</h1>;
//     } else {
//         // eslint-disable-next-line
//     return (
//         <form onSubmit={e => {
//             e.preventDefault();
//             alert(`Sending: "${message}"`);
//             setIsSent(true);}}>
//             <textarea
//             placeholder="Message"
//             value={message}
//             onChange={e => setMessage(e.target.value)}/>
//             <br />
//             <button type="submit">Send</button>
//         </form>
//     );
//   }
// }


// import { useState } from "react";

// export default function Form() {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
  
//     function handleFirstNameChange(e) {
//         setFirstName(e.target.value);
//     }
  
//     function handleLastNameChange(e) {
//         setLastName(e.target.value);
//     }
  
//     function handleReset() {
//       firstName = setFirstName("");
//       lastName = setLastName("");
//     }
  
//     return (
//       <form onSubmit={e => e.preventDefault()}>
//         <input className="border-2 px-2 py-1 mr-2 border-gray-500 rounded-md bg-gray-200"
//           placeholder="First name"
//           value={firstName}
//           onChange={handleFirstNameChange}
//         />
//         <input className="border-2 px-2 py-1 mr-2 border-gray-500 rounded-md bg-gray-200"
//           placeholder="Last name"
//           value={lastName}
//           onChange={handleLastNameChange}
//         />
//         <h1>Hi, {firstName} {lastName}</h1>
//         <button onClick={handleReset}>Reset</button>
//       </form>
//     );
//   }
  





// import { useState } from 'react';
// import { sculptureList } from './data.js';

// export default function Gallery() {
//     const [index, setIndex] = useState(0);
//     const [showMore, setShowMore] = useState(false);

//     function handleNextClick() {
//         setIndex(index + 1);
//     }

//     function handleMoreClick() {
//         setShowMore(!showMore);
//     }

//     let sculpture = sculptureList[index];
//     return (
//         <>
//             <button className="bg-green-600 p-2 hover:bg-green-800 border-2 border-green-900 rounded-md" onClick={handleNextClick}>
//                 Next
//             </button>
//             <h2>
//                 <i>{sculpture.name} </i> 
//                 by {sculpture.artist}
//             </h2>
//             <h3>  
//                 ({index + 1} of {sculptureList.length})
//             </h3>
//             <button className="bg-green-600 p-2 mb-2 hover:bg-green-800 border-2 border-green-900 rounded-md" onClick={handleMoreClick}>
//                 {showMore ? 'Hide' : 'Show'} details
//             </button>
//             {showMore && <p>{sculpture.description}</p>}
//             <img 
//                 src={sculpture.url} 
//                 alt={sculpture.alt}
//             />
//         </>
//     );
// }


// {/* <button onClick={handleNext}>Next</button> */}


// export default function Gallery() {
// const [index, setIndex] = useState(0);
// const [showMore, setShowMore] = useState(false);

// let hasPrev = index > 0;
// let hasNext = index < sculptureList.length - 1;

// function handlePrevClick() {
//     if (hasPrev) {
//     setIndex(index - 1);
//     }
// }

// function handleNextClick() {
//     if (hasNext) {
//     setIndex(index + 1);
//     }
// }

// function handleMoreClick() {
//     setShowMore(!showMore);
// }

// let sculpture = sculptureList[index];
// return (
//     <>
//     <button
//         onClick={handlePrevClick}
//         disabled={!hasPrev}
//     >
//         Previous
//     </button>
//     <button
//         onClick={handleNextClick}
//         disabled={!hasNext}
//     >
//         Next
//     </button>
//     <h2>
//         <i>{sculpture.name} </i> 
//         by {sculpture.artist}
//     </h2>
//     <h3>  
//         ({index + 1} of {sculptureList.length})
//     </h3>
//     <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'} details
//     </button>
//     {showMore && <p>{sculpture.description}</p>}
//     <img 
//         src={sculpture.url} 
//         alt={sculpture.alt}
//     />
//     </>
// );
// }




// import { useState } from 'react';
// import { sculptureList } from './data.js';

// export default function Gallery() {
//     const [index, setIndex] = useState(0);

    // function handleNext() {
    //     if (index >= sculptureList.length - 1) {
    //         setIndex(0);
    //     } else {
    //         setIndex(index + 1);
    //     }
    //     // setIndex(index + 1);
    // }

    // function handlePrev() {
    //     if (index >= 1) {
    //         setIndex(index - 1);
    //     } else {
    //         setIndex(sculptureList.length - 1);
    //     }
    //         // setIndex(index - 1);
    // }

//     let sculpture = sculptureList[index];
//     return (
//         <>
//             <button className="bg-green-600 p-2 hover:bg-green-800 border-2 border-green-900 rounded-md" onClick={handleNext}>Next</button>
//             <h2><i>{sculpture.name} </i> by {sculpture.artist}</h2>
//             <h3>  
//                 ({index + 1} of {sculptureList.length})
//             </h3>
//             <img 
//                 src={sculpture.url} alt={sculpture.alt} />
//             <p>{sculpture.description}</p>
//             <button className="bg-green-600 p-2 hover:bg-green-800 border-2 border-green-900 rounded-md" onClick={handlePrev}>Previous</button>
//         </>
//     );
// }



// import { sculptureList } from './data.js';

// export default function Gallery() {
//     let index = 0;

//     function handleClick() {
//         index = index + 1;
//     }

//     let sculpture = sculptureList[index];
//     return (
//         <>
//             <button className="bg-green-600 p-2 hover:bg-green-800 border-2 border-green-900 rounded-md" onClick={handleClick}>
//                 Next
//             </button>
//             <h2>
//                 <i>{sculpture.name} </i> 
//                 by {sculpture.artist}
//             </h2>
//             <h3>  
//                 ({index + 1} of {sculptureList.length})
//             </h3>
//             <img 
//                 src={sculpture.url} 
//                 alt={sculpture.alt}
//             />
//             <p>
//                 {sculpture.description}
//             </p>
//         </>
//     );
// }