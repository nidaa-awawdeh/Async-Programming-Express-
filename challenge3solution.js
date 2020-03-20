const https = require("https");
const makePokeUrl = pokemon => `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
const pikaUrl = makePokeUrl("pikachu");
//callback in result -->resolve
//callback in err --> reject
const myPromiseApi = url =>
    new Promise((resolve, reject) => {
        https
            .get(url, resp => {
                let data = "";
                // redystate ==3
                resp.on("data", chunk => {
                    data += chunk;
                });
                //readystate ==4
                resp.on("end", () => {
                    try {
                        resolve(JSON.parse(data));
                    }
                    catch (e) {
                        reject("Oops, this isn't JSON");
                    }
                });
            })
            .on("error", err => {
                reject(err.message);
            });
    });
//Challenge Three
const charUrl = makePokeUrl('dshjk');
const chaUrl = makePokeUrl('dshjsdk');
const chrUrl = makePokeUrl('dshdsdfjk');

const charPromise = myPromiseApi(charUrl);
const chaPromise = myPromiseApi(chaUrl);
const chrPromise = myPromiseApi(chrUrl);

const newPromisearray = [myPromiseApi(charUrl), myPromiseApi(charUrl), myPromiseApi(charUrl)];
Promise.all(newPromisearray)
.then((res) => console.log(res))
.catch((err) => console.log(err));
