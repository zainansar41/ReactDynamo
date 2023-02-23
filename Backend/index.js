const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const { DynamoDBClient, ScanCommand, PutItemCommand } = require('@aws-sdk/client-dynamodb');
require('dotenv').config();

const app = express();
app.use(cors())
app.use(bodyParser.json());
const port = process.env.PORT || 8000;

const client = new DynamoDBClient({
    region: process.env.AWS_DEFAULT_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

const TABLE_NAME = 'Login_table';

app.get('/', async (req, res) => {
    try {
        const command = new ScanCommand({ TableName: TABLE_NAME });
        const users = await client.send(command);
        res.send(users);
    } catch (error) {
        res.send({ error })
    }
});

app.post('/', async (req, res) => {
    const { userID, username, email, password } = req.body
    const command = new PutItemCommand({
        TableName: TABLE_NAME,
        Item: {
            'userID': { S: userID },
            'username': { S: username },
            'email': { S: email },
            'password': { S: password }
        }
    })
    try {
        client.send(command).then(result => { res.status(201).send({ msg: "You has been register successfully" }) })
        .catch(error => {
            res.status(500).send({ error })
        });
    } catch (err) {
        res.send(err)
    }
});


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
