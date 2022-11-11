import { Response, Request } from "express";
import mongoose from 'mongoose'
import { BaseController } from "../Base.Controller";
import { ShorturlModel } from "./Shorturl.Model";
import { ShorturlJSON, ShorturlDB } from "./Shorturl.Interface";
import { IPopulate } from "../interfaces/IPopulate";

export class ShorturlController extends BaseController {

  constructor() {
    super(new ShorturlModel());
  }

  post(req: Request, res: Response): void {
    const url = res.locals.url
    res.status(200).json(url);
    //this.jsonRes("PASSED", res);
  }

  get(req: Request, res: Response): void {
    this.jsonRes("PASSED", res);
  }
}