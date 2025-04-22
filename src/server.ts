import express from 'express';
import { serverConfig} from './config';
import v1Router from './routers/v1/index.router';
// import v2Router from './routers/v2/index.router';
// import { pingHandler } from './controllers/ping.controller';
// import { createPingHandler } from './routers/ping.router';

let app=express();

app.use(express.json());

// createPingHandler(app); // routing line


/**
 * Registering all the routers and their corresponding routes without app server object
 */
app.use('/api/v1',v1Router);
// app.use('/api/v1',v2Router);

app.listen(serverConfig.PORT,()=>{
    console.log("server is run on "+serverConfig.PORT);
    console.log("ctrl+c for stop the server.");
})
