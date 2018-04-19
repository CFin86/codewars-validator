import * as mysql from 'mysql';
import * as cheerio from 'cheerio';
import * as request from 'request';
import * as fs from 'fs';
const express = require('express');
const app = express();

const host = "localhost";
const port = '8686';

app.get('/', function(req, res, next){

})

app.listen(port, ()=> console.log(`Your app is listening on ${host}: ${port}`));
