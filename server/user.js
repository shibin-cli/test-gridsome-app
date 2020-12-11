const axios = require('axios')
let p = Promise
const instance = axios.create({
    baseURL: 'https://api.github.com',
    // timeout: 30000,
    // headers: {'Authorization': 'token '},
    params:{
        access_token:'3e857077f2a0738e0e6a225c1c9feebf021c4abf'
    }
  });
module.exports = api => {
            // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    api.loadSource(async ({
        addCollection
    }) => {
        try {const [{
            data: data1
        }, {
            data: data2
        }] = await Promise.all([
            instance.get('users/shibin-cli'),
            instance.get('https://shibin-cli.github.io/static/configuration.json')
        ])
        let user = {
            ...data2,
            ...data1,
            other_blog_url: 'https://laboo.top',
            code_url:'https://github.com/shibin-cli/shibin-cli.io'
        }

        const collection = addCollection('user')
        collection.addNode({
            ...user,
        })
            
        } catch (error) {
            console.log(error.message)
        }
        
    })
}
