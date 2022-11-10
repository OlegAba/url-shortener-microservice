import { Request, Response } from "express";
import * as ServerResponse from './ServerResponse';

export default function(req: Request, res: Response, next: CallableFunction): void {
  const dateStr: string | undefined = req.params.date;

  if (dateStr == undefined) {
    return ServerResponse.notFound(res);
  }

  next();
}