import React, { type FC, useState } from 'react'

import s from './App.module.css'

const App: FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className={s.App}>
      <div>
        <h1 className={s.Title}>
          Frontend Starter
        </h1>
        <p className={s.Desc}>Edit <code>src/App.tsx</code> and save to test HMR.</p>
        <button className={s.Button} onClick={() => { setCount((count) => count + 1) }}>
          Clicked me {count} times
        </button>
      </div>
    </div>
  )
}

export default App
