import React from "react";

const List = (props) => {
    return (<>

        <li>
            <i className="fa-solid fa-xmark" onClick={() => {
                props.onSelect(props.id)
            }} ></i>
            {props.text}
        </li>
    </>)
}
export default List;

