import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
const path = require('./index.node');

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
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
  let bar: foo = path.returnObject();
  console.log(bar.age);
});

interface foo {
    age?: number,
    averageColor?: number,
    histogram?: string,
    histogramWeigthed?: string,
}
