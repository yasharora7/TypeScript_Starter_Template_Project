import express from 'express';
import { serverConfig} from './config';
import pingRouter from './routers/ping.router';
// import { pingHandler } from './controllers/ping.controller';
// import { createPingHandler } from './routers/ping.router';

let app=express();

// createPingHandler(app); // routing line


/**
 * Registering all the routers and their corresponding routes without app server object
 */
app.use(pingRouter);


app.listen(serverConfig.PORT,()=>{
    console.log("server is run on "+serverConfig.PORT);
    console.log("ctrl+c for stop the server.");
})
