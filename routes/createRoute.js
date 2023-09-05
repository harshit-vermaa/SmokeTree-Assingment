import express from 'express'
import { createController } from '../controllers/createController.js'

const router = express.Router()

// main Router for creating the user 
router.post('/create', createController )

export default router
