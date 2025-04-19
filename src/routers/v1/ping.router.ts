import express from "express";
import { pingHandler } from "../../controllers/ping.controller";

// export function createPingHandler(app:Express) {
//     app.get('/ping', pingHandler);
// }

const pingRouter=express.Router();

pingRouter.get('/',pingHandler);

export default pingRouter;