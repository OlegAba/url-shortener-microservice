import { Response } from 'express';

export const notFound = (res: Response): void => {
  res.status(404).json({ error: "Invalid Date" });
}

export const ok = (res: Response, data?: any): void => {
  res.status(200).json(data);
}