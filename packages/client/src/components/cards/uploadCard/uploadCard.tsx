import React, { useState } from 'react'
import { Button } from '../../button/button'
import { Modal } from '../../modal/modal'

import cardStyles from '../card.module.css'
import inputStyles from '../../formField/formField.module.css'
import uploadStyles from './uploadCard.module.css'
import { useAppDispatch } from '../../../store/hooks'
import { uploadAvatar } from '../../../store/user/userActions'

interface Props {
  isActive?: boolean
  setActive?: any
}

export const UploadCard: React.FC<Props> = props => {
  const dispatch = useAppDispatch()
  const [label, setLabel] = useState('Файл не выбран')
  const [file, setFile] = useState({} as File | null)

  const { isActive, setActive } = props

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files }: { files: FileList | null } =
      event.target as HTMLInputElement

    if (!files?.length) {
      return
    }

    const [_file] = files

    setFile(_file)
    setLabel(_file.name)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!file || file === null) {
      return
    }

    const _file = new FormData()
    _file.append('avatar', file)

    dispatch(uploadAvatar(_file))

    setFile(null)
    setLabel('Файл не выбран')
  }

  return (
    <Modal isActive={isActive} setActive={setActive}>
      <form onSubmit={handleSubmit}>
        <div className={`${cardStyles.card} ${cardStyles.cardColumn}`}>
          <h3 className={cardStyles.cardHeader}>Загрузить файл</h3>

          <div className={cardStyles.cardContent}>
            <div className={inputStyles.label}>{label}</div>

            <input
              className={uploadStyles.inputFile}
              name="file"
              type="file"
              id="avatar"
              onChange={handleChange}
            />

            <label className={inputStyles.label} htmlFor="avatar">
              <span className={uploadStyles.buttonLink}>
                Выбрать с компьютера
              </span>
            </label>

            <p className={inputStyles.error}></p>
          </div>

          <div className={cardStyles.cardAction}>
            <Button type="submit">Загрузить</Button>
          </div>
        </div>
      </form>
    </Modal>
  )
}
