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
    const listItems = physicists.map(person => <li>
        {person.init}: {person.profession}
    </li>);
    return <>
        <ul>
            {listItems}
        </ul>
    </>;
}








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