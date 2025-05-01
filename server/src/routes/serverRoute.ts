import asyncHandler from 'express-async-handler';
import { Router } from 'express'
import {
    attackHandler
} from '../handlers/attackHandler';
const router = Router()

router.get('/check', asyncHandler(attackHandler)) 

module.exports = router