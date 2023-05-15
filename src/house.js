import React from "react";
import NewRoomForm from "./new-room-form";

export default class House extends React.Component {
    render() {
        // to create rooms
        const rooms = this.props.data.rooms
            ? this.props.data.rooms.map((room, index) => 
            // creating a list element
            <li key={index}>
                {room.name} Area: {room.area}
                {/* button to delete upon user clicking */}
                <button onClick={e => 
                    this.props.deleteRoom(e. this.props.data, room)
                }>Delete</button>
            </li>)
        : null;
        return (
            <div>
                {/* to show the name ('data' is the house) */}
                <h1>{this.props.data.name}</h1>
                <ul>
                    {rooms}
                </ul>
                {/* child component with props */}
                <NewRoomForm  
                    addNewRoom={this.props.addNewRoom} data={this.props.data} />
            </div>
        );
    }
}