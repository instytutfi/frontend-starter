import React, { type FC } from 'react'

import { BoltIcon, VariableIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'

import {
  CypressIcon, I18NextIcon,
  ReactHookFormIcon,
  ReactIcon,
  ReactRouterIcon,
  StorybookIcon, TailwindCSSIcon,
  TypeScriptIcon,
  ViteIcon
} from 'assets/icons'

const features = [
  {
    name: 'features.typescript.name',
    description: 'features.typescript.description',
    icon: TypeScriptIcon,
    url: 'https://www.typescriptlang.org/'
  },
  {
    name: 'features.vite.name',
    description: 'features.vite.description',
    icon: ViteIcon,
    url: 'https://vitejs.dev'
  },
  {
    name: 'features.storybook.name',
    description: 'features.storybook.description',
    icon: StorybookIcon,
    url: 'https://storybook.js.org'
  },
  {
    name: 'features.plop.name',
    description: 'features.plop.description',
    icon: BoltIcon,
    url: 'https://plopjs.com/'
  },
  {
    name: 'features.react.name',
    description: 'features.react.description',
    icon: ReactIcon,
    url: 'https://reactjs.org'
  },
  {
    name: 'features.react-router.name',
    description: 'features.react-router.description',
    icon: ReactRouterIcon,
    url: 'https://reactrouter.com'
  },
  {
    name: 'features.cypress.name',
    description: 'features.cypress.description',
    icon: CypressIcon,
    url: 'https://cypress.io/'
  },
  {
    name: 'features.react-hook-form.name',
    description: 'features.react-hook-form.description',
    icon: ReactHookFormIcon,
    url: 'https://react-hook-form.com/'
  },
  {
    name: 'features.react-i18next.name',
    description: 'features.react-i18next.description',
    icon: VariableIcon,
    url: 'https://github.com/jquense/yup'
  },
  {
    name: 'features.yup.name',
    description: 'features.yup.description',
    icon: I18NextIcon,
    url: 'https://react.i18next.com/'
  },
  {
    name: 'features.tailwindcss.name',
    description: 'features.tailwindcss.description',
    icon: TailwindCSSIcon,
    url: 'https://tailwindcss.com/'
  }
]

const Features: FC = () => {
  const { t } = useTranslation()

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            {t('features.heading.title')}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('features.heading.description')}
          </p>
        </div>
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-900 shadow-lg shadow-indigo-700/50">
                    <feature.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <a
                    href={feature.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-indigo-700 border-b-current"
                  >
                    {t(feature.name)}
                  </a>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{t(feature.description)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Features
