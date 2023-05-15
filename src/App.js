import React from 'react';
import './App.css';
import House from './house';

const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addNewRoom = this.addNewRoom.bind(this);
    this.deleteRoom = this.deleteRoom.bind(this);
  }

  render() {
    const houses = this.state
      // if this state houses does not exist, then 'map' every house(s) to create 'House' elements (with below properties)
      ? this.state.houses.map((house, index) => 
        <House 
          key={index}
          data={house}
          addNewRoom={this.addNewRoom}
          deleteRoom={this.deleteRoom} />)
      // if it's null, not going to render anything
      : null;
      return (
        <div>
          {/* return list of all hosues */}
          {houses}
        </div>
      );
  }

  // HTTP request 
  componentDidMount() {
    fetch(HOUSES_ENDPOINT)
      // handle promises ('responses')
      .then(res => res.json())
      .then(data => {
        this.setState({
          houses: data
        });
      });
  }

  // e = event 
  deleteRoom(e, house, room) {
    const index = house.rooms.indexOf(room);
    // removing only 1 
    house.rooms.splice(index, 1);
    updateHouse(house)
      .then(() => {
        this.setState(state => { 
          // iterate through each of the houses in the previous state
          for (let h of state.houses) {
            // if 'h' (house) is = previous 'house' then assign 'h' to 'house'
            if (h._id === house._id) {
              let h = house;
              break;
            }
          }
          // then return the (new) state
          return state;
        });
      });
      e.preventDefault();
  }

  addNewRoom(e, house, room) {
    house.rooms.push(room);
    updateHouse(house)
      .then(() => {
        this.setState(state => { 
          for (let h of state.houses) {
            if (h._id === house._id) {
              let h = house;
              break;
            }
          }
          return state;
        });
      });
      e.preventDefault();
  }
}

function updateHouse(house) {
  // making an API call (updating the house/room by using 'Put' method)
  return fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(house)
  });
}
