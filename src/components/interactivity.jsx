// Adding Event Handlers
// export function Button () {
//     return (
        
//     )
// }

export default function Interact() {
    function handleclick() {
        alert("I've been clicked!");
    }
    return (<>
        <button onClick={handleclick} className="bg-gray-200 border-2 rounded-md border-slate-200 button">
            Does nothing!
        </button>
    </>);
}
