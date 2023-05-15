import React from "react";

export default class NewRoomForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // values on the new room
            nameValue: '',
            areaValue: ''
        }
        
        // to bind methods
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAreaChange = this.handleAreaChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // upon an event occuring, the 'targeted' object will be updated with the 'value'
    handleNameChange(e) {
        this.setState({nameValue: e.target.value});
    }

    handleAreaChange(e) {
        this.setState({areaValue: e.target.value});
    }
    
    handleClick(e) {
        this.props.addNewRoom(e, this.props.data, 
            {name: this.state.nameValue, area: this.state.areaValue});
        this.setState({nameValue: '', areaValue:''});
    }

    render() {
        return (
            <div>
                <input type='text' placeholder='Name' onChange={this.handleNameChange} value={this.state.nameValue} />
                <input type='text' placeholder='Area' onChange={this.handleAreaChange} value={this.state.areaValue} />
                <button onclick={this.handleClick}>Add Room</button>
            </div>
        );
    }

}