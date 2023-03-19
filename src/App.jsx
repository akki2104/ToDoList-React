import React, { useState } from "react";
import List from "./List"

const App = () => {

    // add items
    const [listItem, chList] = useState("")
    const [listArray, chArray] = useState([])

    const inputCh = (event) => {
        chList(event.target.value)
    }

    const addItems = () => {
        chArray((oldValues) => {
            return [...oldValues, listItem]
        })
        chList("");
    }


    // delete items
    const deleteItems=(id)=>{
        chArray((oldValues)=>{
            return oldValues.filter((ele,index)=>{
                return index!==id;
            })
        })
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div" >
                    <br />
                    <h1>todo-list</h1>
                    <br />
                    <div><input type="text" placeholder="Add a new todo..." onChange={inputCh} value={listItem} />
                        <button onClick={addItems}  ><i className="fa-solid fa-plus "></i></button>
                    </div>
                </div>

            </div>
            <ul style={{ paddingLeft: "0" }} >

                {listArray.map((listValues,index) => {
                    return <List id={index} text={listValues} onSelect={deleteItems} />
                })}
            </ul>
        </>
    )
}


export default App;