import { Request, Response} from 'express';
import * as ServerResponse from './ServerResponse'

interface TimestampDate {
  [index: string]: string | number;   
}

function formatDate(d: Date): TimestampDate {
  const unix = Math.floor(d.getTime());
  const utc = d.toUTCString();
  const td: TimestampDate = { unix: unix, utc: utc };
  return td;
}

function isValidDate(d: Date): boolean {
  return d instanceof Date && isFinite(d.getTime());
}

function isNumber(str: string): boolean {
  return /^\d+$/.test(str);
}

export default class Controller {

  public getCurrentDate(req: Request, res: Response): void {
    const date = new Date();
    return ServerResponse.ok(res, formatDate(date));
  }

  public getTimestampDate(req: Request, res: Response): void {
    let inputDate: string | number = req.params.date;

    // Check if date is a unix timestamp
    if (isNumber(inputDate)) {
      inputDate = parseInt(inputDate);
    }

    const date = new Date(inputDate);

    if (!isValidDate(date)) {
      return ServerResponse.notFound(res);
    }

    const td: TimestampDate = formatDate(date);

    return ServerResponse.ok(res, td);
  }
}