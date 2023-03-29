module.exports = (plop) => {
  plop.setGenerator('component', require('./plop/component/_config.cjs'))
  plop.setGenerator('hook', require('./plop/hook/_config.cjs'))
  plop.setGenerator('service', require('./plop/service/_config.cjs'))
}
