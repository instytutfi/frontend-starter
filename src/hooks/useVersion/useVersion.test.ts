import packageJson from '../../../package.json'

import useVersion from './useVersion'

describe('camelCase', () => {
  it('should run', async () => {
    expect(useVersion).toBeDefined()
    expect(useVersion()).toEqual(`${packageJson.name} ${packageJson.version}`)
  })
})
