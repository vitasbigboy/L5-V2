class Validator {
  email() {
    const emailValidator = {
      minLength: null,
      maxLength: null,

      setEmailLengthConstraint(minLength, maxLength = null) {
        this.minLength = minLength;
        this.maxLength = maxLength;
        return this;
      },

      isValid(value) {
        if (typeof value !== 'string' || !value.includes('@')) {
          return false;
        }

        const localPart = value.split('@')[0];

        if (this.minLength !== null && localPart.length < this.minLength) {
          return false;
        }

        if (this.maxLength !== null && localPart.length > this.maxLength) {
          return false;
        }

        return true;
      },
    };

    return emailValidator;
  }

  age() {
    const ageValidator = {
      AAA: false,
      isAdult() {
        this.AAA = true;
        return this;
      },

      isValid(value) {
        if (typeof value !== 'number' || Number.isNaN(value)) {
          return false;
        }

        if (value < 0) {
          return false;
        }

        if (this.AAA && value < 18) {
          return false;
        }

        return true;
      },
    };

    return ageValidator;
  }
}

export default Validator;
