import React, { useState } from "react";
import List from "./List"



const App = () => {
    
    // let finalValue;

    // add items
    const [listItem, chList] = useState("")
    const [listArray, chArray] = useState([])

    const inputCh = (event) => {
        chList(event.target.value)
        console.log(event.target.value)
        // finalValue=event.target.value;
    }

    const addItems = () => {
        if(listItem!==""){
            chArray((oldValues)=>{
                console.log(oldValues)
                return [...oldValues,listItem];
                
            })
        }else{
            console.log("bhai values to add krle...")
        }
        chList("");
    }

    // document.addEventListener("keydown",(e)=>{
    //     if(e.key==="Enter"){
    //         addItems();
    //     }else{console.log("eat 5 star do nothing")}
    // })


    
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