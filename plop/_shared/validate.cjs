const requireField = (value) => (`${value}`.length === 0)  ? `This input is required` : true

const validate = (validators) => {
  return (value) => {
    const errors = validators.map(validator => validator(value)).filter(v => typeof v === 'string')
    return errors.length > 0 ? errors.join('; ') : true
  }
}

module.exports = {
  validate,
  validators: {
    requireField
  }
}
