var request = require('request');

var api = '62a8af3b1a51777906affa4a';
var url = 'https://fridge-faeb.restdb.io/rest/fridges';

export async function getAllFridges() {
    var options = {
        method: 'GET',
        url: url,
        headers:
        {
            'cache-control': 'no-cache',
            'x-apikey': api
        }
    };

    return new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
            if (error) reject(error);
            resolve(JSON.parse(body));
        });
    });
}