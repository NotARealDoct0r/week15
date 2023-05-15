const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

// await keyword can only be used inside 'async'
const getHouses = async () => {
    const resp = await fetch(HOUSES_ENDPOINT);
    const json = await resp.json();
    console.log(json); // or console.log(resp)


    // fetch(HOUSES_ENDPOINT)
    // .then(resp => resp.json())
    // .then(resp => console.log(resp));
}

getHouses();