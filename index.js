class Validator {
  email() {
    return {
      isValid(value) {
        return typeof value === 'string' && value.includes('@');
      },
    };
  }
}

export default Validator;
