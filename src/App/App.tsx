import React, { type FC, useState } from 'react'

import { useTranslation } from 'react-i18next'

import s from './App.module.css'

const App: FC = () => {
  const { t } = useTranslation()
  const [count, setCount] = useState(0)

  return (
    <div className={s.App}>
      <div>
        <h1 className={s.Title}>
          {t('app.name')}
        </h1>
        <p className={s.Desc}>{t('app.description')}</p>
        <button className={s.Button} onClick={() => { setCount((count) => count + 1) }}>
          {t('counter.label', { count })}
        </button>
      </div>
    </div>
  )
}

export default App
