const TmeApiClient = require('./client');

const args = process.argv.slice(2)

const data = JSON.parse(Buffer.from(args[0], 'base64').toString('utf-8'))

const url = new URL(data.uri)
const baseUrl = url.origin
const uri = url.pathname.substring(1)
const token = data.credentials.token
const secret = data.credentials.secret

const client = new TmeApiClient(
    token, secret, baseUrl
);

params = Object.assign({Token: token})

for (var key in data.data) {
        params = Object.assign(params, {[key]: data.data[key]})
}

console.log(client.calcSig(uri, params))