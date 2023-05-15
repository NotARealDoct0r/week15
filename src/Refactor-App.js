// importing react + component
import React, { Component } from 'react';
// importing HousesList from the houseslist.js file
import { HousesList } from './Components/HousesList';

// rendering the 'HousesList'
class RefactorApp extends Component {
    render() {
        return (
            <div>
                <HousesList />
            </div>
        )
    }
}

export default RefactorApp;