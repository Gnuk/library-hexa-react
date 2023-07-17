export abstract class Either<ERR, OK> {
  static ok<ERR, OK>(value: OK): Ok<ERR, OK> {
    return Ok.of<ERR, OK>(value);
  }

  static err<ERR, OK>(error: ERR): Err<ERR, OK> {
    return Err.of<ERR, OK>(error);
  }

  abstract map<U>(mapper: (value: OK) => U): Either<ERR, U>;

  abstract mapErr<U>(mapper: (error: ERR) => U): Either<U, OK>;

  abstract evaluate(err: (error: ERR) => void, ok: (value: OK) => void): void;

  static tryFrom<ERR, OK>(throwable: () => OK): Either<ERR, OK> {
    try {
      return Ok.of(throwable());
    } catch (e) {
      return Err.of<ERR, OK>(e as ERR);
    }
  }
}

export class Ok<ERR, OK> extends Either<ERR, OK> {
  constructor(private readonly value: OK) {
    super();
  }

  static of<ERR, OK>(value: OK): Ok<ERR, OK> {
    return new Ok<ERR, OK>(value);
  }

  map<U>(mapper: (value: OK) => U): Either<ERR, U> {
    return Either.ok(mapper(this.value));
  }

  mapErr<U>(_: (error: ERR) => U): Either<U, OK> {
    return Either.ok(this.value);
  }

  evaluate(_: (error: ERR) => void, ok: (value: OK) => void): void {
    ok(this.value);
  }
}

export class Err<ERR, OK> extends Either<ERR, OK> {
  constructor(private readonly error: ERR) {
    super();
  }

  static of<ERR, OK>(error: ERR): Err<ERR, OK> {
    return new Err<ERR, OK>(error);
  }

  map<U>(_: (ok: OK) => U): Either<ERR, U> {
    return Err.of(this.error);
  }

  mapErr<U>(mapper: (err: ERR) => U): Either<U, OK> {
    return Either.err(mapper(this.error));
  }

  evaluate(err: (error: ERR) => void, _: (value: OK) => void): void {
    err(this.error);
  }
}
