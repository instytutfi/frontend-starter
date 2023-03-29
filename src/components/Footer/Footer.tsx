import React, { type FC, useMemo } from 'react'

import { HeartIcon } from '@heroicons/react/24/solid'
import { useTranslation } from 'react-i18next'

import s from './Footer.module.css'

const Footer: FC = () => {
  const { t } = useTranslation()
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <div className="py-16 mx-auto max-w-7xl px-6 lg:px-8">
      <p className="text-center text-gray-600 text-sm">
        {t('footer.copyright', { year })}{' '}
        {t(
          'footer.author',
          {
            heart: <HeartIcon className="inline-block w-5 h-5 text-red-500" />,
            author: (
              <>
                <a
                  href="https://github.com/mciszczon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.Link}
                >
                  Mateusz Ciszczoń
                </a>/
                <a
                  href="https://github.com/instytutfi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.Link}
                >
                  Instytut Fi
                </a>
              </>
            )
          }
        )}
      </p>
    </div>
  )
}

export default Footer
