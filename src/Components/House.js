// importing react + a component
import React from "react";
import { NewRoomForm } from './NewRoomForm';

export const House = (props) => {
    // deconstructing the props to get 'house' + 'updateHouse' 
    const { house, updateHouse } = props;

    // method to delete a specific room
    const deleteRoom = (roomId) => {
        const updatedHouse = {
            // spread operator 
            ...house,
            // keep all the values from house except the room that is being targeted w/ 'roomId'
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);
    }

    // method to add a new room (by updating the house)
    const addNewRoom = (room) => updateHouse({ ...house, rooms: [...house.rooms, room]});
        // new array that takes all values from old array and adding a new room to it
    
    // function to pass in the props below (under 'return')
    const rooms = () => (
        <ul>
            {house.rooms.map((room, index) => (
                <li key={index}>
                    <label>{`${room.name} Area: ${room.area}`}</label>
                    <button onClick={(e) => deleteRoom(room._id)}>Demolish</button>
                </li>
            ))}
        </ul>
    );

    return (
        <div>
            <h1>{house.name}</h1>
            {
                rooms({ rooms, houseId: house._id, deleteRoom})
            }
            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    )

};