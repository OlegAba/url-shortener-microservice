import { Router } from "express";
import { ShorturlController } from "./Shorturl.Controller";
import { validateURL, validateID } from './Shorturl.Validation';
import { Request, Response } from "express";

const router = Router();
const controller = new ShorturlController();
const base = '/shorturl';

router.post(
  base, 
  validateURL, 
  (req: Request, res: Response) => { 
    controller.post(req, res)
  }
);

router.get(
  `${base}/:id`, 
  validateID,
  (req: Request, res: Response) => { 
    controller.get(req, res) 
  }
);

export default router;