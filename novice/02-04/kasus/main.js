const axios = require('axios');

const getAPI = async() =>{
    try {
        const Url = 'https://jsonplaceholder.typicode.com/posts'
        axios.get(Url)
            .then(data => console.log(data))
    } catch (error) {
        
    }
}

getAPI();