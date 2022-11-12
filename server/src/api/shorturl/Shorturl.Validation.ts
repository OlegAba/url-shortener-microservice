import { Request, Response } from "express";
import dns from 'dns';

export function validateURL(req: Request, res: Response, next: CallableFunction): void {
  const url: string | undefined = req.body.url;
  const errRes = { error: 'invalid url' } 

  if (url === undefined || url === '') {
    res.status(500).json(errRes);
    return
  }

  const baseURL = url.replace(/^https?:\/\//, '');

  dns.lookup(baseURL, (err) => {
    if (err) {
      res.status(500).json(errRes);
      return
    }

    res.locals.url = baseURL
    next()
  });
}

export function validateID(req: Request, res: Response, next: CallableFunction): void {
  const id = req.params.id
  const errRes = { error: 'Wrong format' }

  if (id === undefined || typeof(id) !== 'string') {
    res.status(500).json(errRes);
    return
  }

  res.locals.id = id
  next()
}