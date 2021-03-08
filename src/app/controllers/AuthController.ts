import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import dotenv from 'dotenv'

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/User'

dotenv.config()

class AuthController {
  async authenticate(req: Request, res: Response) {
    const repository = getRepository(User)

    const { email, password } = req.body

    const user = await repository.findOne({ where: { email }})

    if(!user) {
      res.sendStatus(401)
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      res.sendStatus(401)
    }

    const token = jwt.sign(
      { id: user.id }, 
      process.env.SECRET_OR_PRIVATE_KEY, 
      { expiresIn: '1d'}
    )

    delete user.password

    return res.json({
      user,
      token
    })

  }
}

export default new AuthController()
