import { Router } from "express";
import { todoController } from "../controllers/todo.controllers";


const router = Router ();
router.get ('/', todoController.getall);

export default router;