import React, { type FC, useMemo } from 'react'

import { HeartIcon } from '@heroicons/react/24/solid'
import { useTranslation } from 'react-i18next'

import { useVersion } from 'hooks'

import s from './Footer.module.css'

const Footer: FC = () => {
  const { t } = useTranslation()
  const version = useVersion()
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <div className="py-16 mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-4 text-center md:flex-row md:justify-between md:text-left text-gray-600 text-sm">
      <p>
        {t('footer.copyright', { version, year })}
      </p>
      <p>
        {t(
          'footer.author',
          {
            heart: <HeartIcon key="heart" className="inline-block w-5 h-5 text-red-500" />,
            author: (
              <span key="links">
                <a
                  key="mciszczon"
                  href="https://github.com/mciszczon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.Link}
                >
                  Mateusz Ciszczoń
                </a>/
                <a
                  key="instytutfi"
                  href="https://github.com/instytutfi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.Link}
                >
                  Instytut Fi
                </a>
              </span>
            )
          }
        )}
      </p>
    </div>
  )
}

export default Footer
