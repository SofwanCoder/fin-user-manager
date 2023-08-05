import express from "express";
import {createTokenRules} from "../../middlewares/validator/auth.validations";
import validateRules from "../../middlewares/validator";
import AuthHandler from "../../handlers/AuthHandler";


const router = express.Router();

router.post("/tokens", createTokenRules(),   validateRules(), AuthHandler.handleCreateToken);

export const authRoutes = router;
