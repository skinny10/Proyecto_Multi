import { Router } from "express";
import {
  login,
  logout,
  register,
  verifyToken,getUser,getUsers,updateUser,deleteUser,

} from "../controllers/auth.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.get("/verify", verifyToken);


router.get("/Users" , getUsers) ;

router.get("/Users/:id" , getUser) ;


router.put("/Users/:id" , updateUser) ;

router.delete("/Users/:id" , deleteUser) ;



export default router;
