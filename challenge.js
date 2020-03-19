const https = require('https')
const makePokeUrl = pokemon => `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
const pikaUrl = makePokeUrl('pikachu')

const myApiCall = (url, callback) => {
    //my myApiCall like xhr but only diff is logic 
    //write resp using
    https
        .get(url, resp => {
 //coz this asyc we need callback to see results
            let data = ''
  // why we define nulldata coz res from any website have 4 stage readystate 0,1,2,3,5
  // we start deal with redystate 3 which means responce downloading          
          
            resp.on('data', chunk => {
                data += chunk
            })
// when endresponce the readystate become 4
            resp.on('end', () => {
                try {
                    callback(null, JSON.parse(data))
                } catch (e) {
                    callback('Oops, this isn\'t JSON')
                }
            })
        })
// if have error give me message
        .on('error', err => {
            callback(err.message)
        })
}

myApiCall(pikaUrl, (err, res) => {
    if (err) console.log(res)
    else console.log(res)
})

//Now let's make it a Promise

// const myPromiseApi =

//And call it here...
