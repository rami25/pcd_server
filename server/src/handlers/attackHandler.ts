import  { IncomingMessage, ServerResponse } from 'http';


const process = () => {
  for (let i = 0; i < 100; i++) {
    let a = 0, b = 0;
    let c = a + b;
    a = c;
    b = a;
    console.log("done");
  }
};

export const attackHandler = (req: IncomingMessage, res: ServerResponse) => {
  const { method } = req;
  process();
  if (method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello !!!');
  } else {
    res.end('process failed !!!');
  } 
};