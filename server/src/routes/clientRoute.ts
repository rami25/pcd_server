import asyncHandler from 'express-async-handler';
import { Router } from "express";
import { 
    signinClientHandler,
    signupClientHandler,
    getClientHandler

} from '../handlers/clientHandler';
import { jwtParseMiddleware } from '../middlewares/authMiddleware';

const router = Router()
router.post('/sign-in', asyncHandler(signinClientHandler))
router.post('/sign-up', asyncHandler(signupClientHandler))
router.get('/get-receipts', jwtParseMiddleware, asyncHandler(getClientHandler))
module.exports = router