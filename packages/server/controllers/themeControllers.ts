import type { Request, Response } from 'express'

import { UserTheme } from '../models/userTheme'

export const getTheme = async (req: Request, res: Response) => {
  try {
    const user = await UserTheme.findOne({
      where: {
        user_id: req.params.id,
      },
    })

    if (user) {
      res.status(200).json({ theme: user.value })
    } else {
      res.status(404).json({ error: `The theme for the user was not found` })
    }
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const postTheme = async (req: Request, res: Response) => {
  try {
    const isExist = await UserTheme.findOne({
      where: {
        user_id: req.body.user_id,
      },
    })

    if (isExist) {
      res.status(400).json({ error: `The user already exists` })
      return
    }

    const user = await UserTheme.create(req.body)

    if (user.dataValues.value) {
      res.status(201).json({ theme: user.dataValues.value })
    } else {
      res.status(400).json({ error: `Failed to create a user` })
    }
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const putTheme = async (req: Request, res: Response) => {
  try {
    await UserTheme.update(
      { value: req.body.value },
      {
        where: {
          user_id: req.body.user_id,
        },
      }
    )

    const updatedUser = await UserTheme.findOne({
      where: {
        user_id: req.body.user_id,
      },
    })

    if (updatedUser) {
      res.status(201).json({ theme: updatedUser.dataValues.value })
    } else {
      res.status(400).json({ error: `An error occurred while updating` })
    }
  } catch (error) {
    res.status(500).json({ error })
  }
}
