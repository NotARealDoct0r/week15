import React, {useState} from "react";

export const NewRoomForm = (props) => {
    // using hooks 
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined);

    // to be able to verify that user is inputting a # (round to the 10th)
    const handleAreaInput = (e) => {
        const int =parseInt(e.target.value, 10);
        // as long as int >= 0, pass it in, otherwise pass in an empty string
        setArea(int >= 0 ? int : '');
    }

    // defining what happens upon 'event' / submit
    const onSubmit = (e) => {
        // prevent default 
        e.preventDefault();
        // if name + area are true, pass in objects 'name' + 'area'
        if (name && area) {
            props.addNewRoom({name, area});
            setName('');
            setArea('');
        } else {
            console.log('invalid input');
        }
    };

    return (
        <div>
            <h4>Add New Addition to the House</h4>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Room Name"
                    // onChange = upon an 'event' occurrence, update the targeted 'Name' (value)
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type="text"
                    placeholder="Area Size"
                    onChange={handleAreaInput}
                    value={area}
                />
                <button type="submit">Create Room</button>
            </form>
        </div>
    )
};