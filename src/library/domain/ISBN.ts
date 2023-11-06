const VALID_LENGTHS = new Set([10, 13]);

const assertForDigits = (digits: string): void => {
  if (!digits.match(/^[0-9]+$/)) {
    throw new Error('Non digits are not allowed for ISBN');
  }
};

const validLength = (digits: string): boolean => VALID_LENGTHS.has(digits.length);

const invalidLength = (digits: string): boolean => !validLength(digits);

const assertForLength = (digits: string): void => {
  if (invalidLength(digits)) {
    throw new Error('The ISBN size is not valid');
  }
};

export class ISBN {
  private constructor(private digits: string) {
    assertForDigits(digits);
    assertForLength(digits);
  }

  static of(digits: string): ISBN {
    return new ISBN(digits);
  }

  get(): string {
    return this.digits;
  }
}
