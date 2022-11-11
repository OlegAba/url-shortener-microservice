import { Router } from "express";
import { ShorturlController } from "./Shorturl.Controller";
import { validateURL, validateID } from './Shorturl.Validation';

const router = Router();
const controller = new ShorturlController();
const base = '/shorturl';

router.route(base).post(validateURL, controller.post)
router.route(`${base}/:id`).get(validateID, controller.get)

export default router;