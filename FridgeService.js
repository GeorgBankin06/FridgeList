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

export async function getProducts(fridgeId) {
    console.log(fridgeId);
    var options = {
        method: 'GET',
        url: url + '/' + fridgeId,
        headers:
        {
            'cache-control': 'no-cache',
            'x-apikey': api
        }
    };

    return new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
            if (error) reject(error);
            var jsonBody = JSON.parse(body);
            console.log(jsonBody["products"]);
            resolve(jsonBody["products"]);
        });
    });
}

export async function createProduct(productName, expiryDate, id) {
    console.log(url + '/' + id);
    var options = {
        method: 'PUT',
        url: url + '/' + id,
        headers:
        {
            'cache-control': 'no-cache',
            'x-apikey': api,
            'content-type': 'application/json'
        },
        body: {
            products: {
                "productName": productName,
                "expiryDate": expiryDate
            }
        },
        json: true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });
}