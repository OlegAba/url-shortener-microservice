import { Router } from "express";
import Controller from "./Controller";
import Validation from "./Validation";

const routes = Router();
const controller = new Controller();

routes.route('/').get(controller.getCurrentDate);
routes.route('/:date').get(Validation, controller.getTimestampDate);

export default routes;