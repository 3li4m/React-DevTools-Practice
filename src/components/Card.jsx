import React from "react";
import Avatar from "./Avatar";
import CardDetails from "./CardDetails";

function Card(props){
    return(
        <div>
            <div className="card">
                <div className="top">
                    <h2 className="name">{props.name}</h2>
                    <Avatar avatar={props.imgURL}/>
                </div>
                <div className="bottom">
                    <CardDetails info={props.phone}/>
                    <CardDetails info={props.email}/>
                </div>
            </div>
        </div>
    );
}

export default Card;