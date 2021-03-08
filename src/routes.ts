import { Router } from 'express'

import UserRoute from './app/routes/UserRoute'
import AuthRoute from './app/routes/AuthRoute'

const router = Router()

router.use('/auth', AuthRoute)
router.use('/users', UserRoute)

export default router