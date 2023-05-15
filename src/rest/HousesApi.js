// API provided from class
const HOUSES_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses";

class HousesApi {
  // async function
  get = async () => {
    try {
      // resp = response & data => turned into json
      const resp = await fetch(HOUSES_ENDPOINT);
      // await = perform one at a time   
      const data = await resp.json();
      return data;
    } catch(e) {
        console.log('Oops, looks like fetchHouses had an issue', e); 
    }
  }

  put = async (house) => {
    // try & catch is in place to be able to accomodate a potential error
    try{
        const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
            // put = update
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            // convert to a string
            body: JSON.stringify(house)
        });
        return await resp.json();
    } catch(e) {
        console.log('Oops, looks like updating houses had an issue', e);
    }
  }  
}

export const housesApi = new HousesApi();