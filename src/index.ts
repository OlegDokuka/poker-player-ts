/// <reference path='../typings/index.d.ts'/>
import * as express from 'express';
import * as bodyParser from 'body-parser';
import {BetService, ShowdownService} from './service';

const VERSION = "0.0.0";

const app = express();
const betService = new BetService();
const showdownService = new ShowdownService();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', ({}, res) => res.send(200, 'OK'));

app.post('/', function (req, res) {
    if (req.body.action === 'bet_request') {
        const bet = betService.process(JSON.parse(req.body.game_state));
        res.status(200).send(bet.toString());
    } else if (req.body.action === 'showdown') {
        showdownService.process(JSON.parse(req.body.game_state));
        res.status(200).send('OK');
    } else if (req.body.action === 'version') {
        res.send(200, VERSION);
    } else {
        res.send(200, 'OK');
    }
});

const port = parseInt(process.env['PORT'] || 1337);
const host = "0.0.0.0";
app.listen(port, host);
console.log('Listening at http://' + host + ':' + port);
