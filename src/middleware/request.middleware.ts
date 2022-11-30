import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class RequestMiddleWare implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        console.log('Request Middleware is Running.....')
        next();
    }
    
}