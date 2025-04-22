 import { Request, Response } from "express";

 

  export const pingHandler=(req: Request,res: Response)=>{
    // console.log(req.body);
    // res.send("pong");
    res.status(200).json({
      message:"Pong",
      success: true,
    })
    }
 