import React, { type FC } from 'react'

import { ArrowTopRightOnSquareIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'

const navigation = [
  { name: 'Github', href: 'https://github.com/instutfi/frontend-starter', external: true }
]

const Hero: FC = () => {
  const { t } = useTranslation()

  return (
    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <h1 className="flex lg:flex-1 items-center gap-3 p-1.5 text-indigo-600">
            <RocketLaunchIcon className="h-8 md:h-10" />
            <span className="md:text-lg font-bold tracking-tight">
              {t('app.name')}
            </span>
          </h1>
          <div className="flex gap-x-12 justify-end">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="flex items-top gap-0.5 text-sm font-semibold leading-6 border-b-2 border-b-transparent transition-all text-gray-900 hover:text-indigo-800 hover:border-b-indigo-800"
              >
                {item.name}
                {item.external && <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />}
              </a>
            ))}
          </div>
        </nav>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl pt-32 pb-16 sm:pt-48 sm:pb-24 lg:pt-56 lg:pb-28">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {t('app.description')}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {t('hero.paragraph')}
              </p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://github.com/instytutfi/frontend-starter#readme"
                rel="noopener noreferrer"
                className="transition-all rounded-xl bg-indigo-600 px-8 py-3 shadow-lg shadow-indigo-800/50 hover:shadow-xl hover:shadow-indigo-800/50 text-base font-semibold leading-7 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {t('hero.cta.label')}
              </a>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Hero
