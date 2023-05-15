// importing React + 2 components
import React from 'react';
import { House } from './House';
import { housesApi } from '../rest/HousesApi.js';

export class HousesList extends React.Component {
    // var state = new array ('houses')
    state = {
        houses: []
    };

    // method to call request
    componentDidMount() {
        this.fetchHouses();
    }

    // defining the method - using async function to call the 'get' method (read houses' states)
    fetchHouses = async () => {
        const houses = await housesApi.get();
        // values that come back from the API
        this.setState({houses});
    };

    // calls the 'put' method on the 'HousesApi'(to call the HTTP request to update)
    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        this.fetchHouses();
    };

    render() {
        return (
            // className added if CSS is going to be used 
            <div className='house-list'> 
            {/* mapping each houses  */}
                {this.state.houses.map((house) => (
                    <House 
                        house={house}
                        key={house._id}
                        updateHouse={this.updateHouse}
                        />
                ))}
            </div>
        )
    }
}