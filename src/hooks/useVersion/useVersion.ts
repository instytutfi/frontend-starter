import packageJson from '../../../package.json'

const useVersion = (): string => {
  return `${packageJson.name} ${packageJson.version}`
}

export default useVersion
