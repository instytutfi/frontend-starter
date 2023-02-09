import React, { type FC, useMemo } from 'react'

import { HeartIcon } from '@heroicons/react/24/solid'

const Footer: FC = () => {
  const today = useMemo(() => new Date().getFullYear(), [])

  return (
    <div className="py-16 mx-auto max-w-7xl px-6 lg:px-8">
      <p className="text-center text-gray-600 text-sm">
        Copyleft {today}.{' '}
        Made with <HeartIcon className="inline-block w-4 h-4 text-red-400" /> by Mateusz Ciszczoń/Instytut Fi.
      </p>
    </div>
  )
}

export default Footer
