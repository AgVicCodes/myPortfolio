import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        setIndex(index + 1);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <button className="bg-green-600 p-2 hover:bg-green-800 border-2 border-green-900 rounded-md" onClick={handleNextClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name} </i> 
                by {sculpture.artist}
            </h2>
            <h3>  
                ({index + 1} of {sculptureList.length})
            </h3>
            <button className="bg-green-600 p-2 mb-2 hover:bg-green-800 border-2 border-green-900 rounded-md" onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img 
                src={sculpture.url} 
                alt={sculpture.alt}
            />
        </>
    );
}


{/* <button onClick={handleNext}>Next</button> */}



// import { useState } from 'react';
// import { sculptureList } from './data.js';

// export default function Gallery() {
//     const [index, setIndex] = useState(0);

//     function handleNext() {
//         if (index >= sculptureList.length - 1) {
//             setIndex(0);
//         } else {
//             setIndex(index + 1);
//         }
//         // setIndex(index + 1);
//     }

//     function handlePrev() {
//         if (index >= 1) {
//             setIndex(index - 1);
//         } else {
//             setIndex(sculptureList.length - 1);
//         }
//             // setIndex(index - 1);
//     }

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