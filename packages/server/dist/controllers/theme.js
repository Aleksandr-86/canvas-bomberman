'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.putTheme = exports.postTheme = exports.getTheme = void 0
const userTheme_1 = require('../models/userTheme')
const getTheme = async (req, res) => {
  try {
    const user = await userTheme_1.UserTheme.findOne({
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
exports.getTheme = getTheme
const postTheme = async (req, res) => {
  try {
    const isExist = await userTheme_1.UserTheme.findOne({
      where: {
        user_id: req.body.user_id,
      },
    })
    if (isExist) {
      res.status(400).json({ error: `The user already exists` })
      return
    }
    const user = await userTheme_1.UserTheme.create(req.body)
    if (user.dataValues.value) {
      res.status(201).json({ theme: user.dataValues.value })
    } else {
      res.status(400).json({ error: `Failed to create a user` })
    }
  } catch (error) {
    res.status(500).json({ error })
  }
}
exports.postTheme = postTheme
const putTheme = async (req, res) => {
  try {
    await userTheme_1.UserTheme.update(
      { value: req.body.value },
      {
        where: {
          user_id: req.body.user_id,
        },
      }
    )
    const updatedUser = await userTheme_1.UserTheme.findOne({
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
exports.putTheme = putTheme
//# sourceMappingURL=theme.js.map
