const validator = require('validator')

class EmailValidator {
  isValid (email) {
    return validator.isEmail(email)
  }
}

const makeSut = () => {
  const sut = new EmailValidator()
  return { sut }
}

describe('Email Validator', () => {
  test('Should return true if validator returns true', () => {
    const { sut } = makeSut()
    const isEmailValid = sut.isValid('valid_email@mail.com')
    expect(isEmailValid).toBe(true)
  })

  test('Should return false if email validator returns false', () => {
    validator.isEmailValid = false
    const { sut } = makeSut()
    const isEmailValid = sut.isValid('invalid_email@mail.com')
    expect(isEmailValid).toBe(false)
  })

  test('Should call validator with correct email', () => {
    const { sut } = makeSut()
    sut.isValid('any@mail.com')
    expect(validator.email).toBe('any@mail.com')
  })
})
