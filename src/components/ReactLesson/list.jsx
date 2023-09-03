import {Fragment} from "react";

const people = [
    {
        id: 1,
        init: "Mary Slessor",
        profession: "Chemist"
    },
    {
        id: 2,
        init: "Isaac Newton",
        profession: "Physicist"
    },
    {
        id: 3,
        init: "Albert Einstein",
        profession: "Physicist"
    },
    {
        id: 4,
        init: "Pythagoras",
        profession: "Mathematician"
    }
];


export default function List() {
    // const listItems = people.map(person => <li>
    //     {person.init}: {person.profession}
    // </li>);
    const physicists = people.filter(person => person.profession === "Physicist");
    const listItems = physicists.map(person => 
    <Fragment key={person.id}>
        <li>
            {person.init}: {person.profession}
        </li>
    </Fragment>);
    return <>
        <ul>
            {listItems}
        </ul>
    </>;
}






/*import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemists = people.filter(person => 
    person.profession === "chemist");
  const listItems1 = chemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  const others = people.filter(person => 
    person.profession !== "chemist");
  const listItems2 = others.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (<>
        <article>
            <h1>Chemists</h1>
            <ul>{listItems1}</ul>
        </article>
        <article>
            <h1>Everyone else</h1>
            <ul>{listItems2}</ul>
        </article>
    </>
  );
}*/

// const physicists = people.filter(person => person.profession === "Physicist");
// const listItems = physicists.map(person => <li>
//     {person.init}: {person.profession}
// </li>);

/*const people = [
    "Mary Slessor: Chemist",
    "Isaac Newton: Physicist",
    "Albert Einstein: Physicist",
    "Pythagoras: Mathematician"
];


export default function List() {
    const listItems = people.map(person => <li>{person}</li>)
    return <>
        <ul>
            {listItems}
        </ul>
    </>;
}*/