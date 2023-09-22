import React from 'react';Edited JSX
import { useState } from 'react';

function IsItChecked ({name, liState = "Status: ❎"}) {

    const [check, setCheck] = useState(false);

    function doCheck() {
        console.log("We are here");
        if(check) {
            liState = "Status: ✅"
            
        } else {    
            liState = "Status: ❎"
        }
    }
    // return <>
    //     <h1>{name}{". " } {liState} <button onClick={() => doCheck()} className='click'>CLick me</button></h1>
    // </>
    setCheck(!check);

    return <>
        <h1>{name}{". " } {liState} <button onClick={() => doCheck()} className='click'>CLick me</button></h1>
    </>
}

export function Checker() {
    return (<>
        <ul>
            <li>
                <IsItChecked 
                    name="Packed my books"
                    isCheck={true}
                />
            </li>
            <li>
                <IsItChecked 
                    name="Packed my books"
                    isCheck={false}
                />
            </li>
            <li>
                <IsItChecked 
                    name="Packed my books"
                    isCheck={true}
                />
            </li>
            <li>
                <IsItChecked 
                    name="Packed my books"
                    isCheck={true}
                />
            </li>
        </ul>
    </>
    );
}
