"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path = require('./index.node');
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
const buffer = new Buffer(5);
buffer[0] = 255;
buffer[1] = 25;
buffer[2] = 155;
buffer[3] = 55;
buffer[4] = 180;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    console.log(path.hello());
    console.log(path.complexType(buffer));
    console.log(path.returnObject());
    let bar = path.returnObject();
    console.log(bar.age);
});
