export abstract class Optional<T> {
  static of<U>(value: U): Optional<U> {
    return new ValuatedOptional<U>(value);
  }

  static empty<U>(): Optional<U> {
    return new EmptyOptional<U>();
  }

  abstract isPresent(): boolean;

  abstract isEmpty(): boolean;

  abstract map<U>(mapper: (source: T) => U): Optional<U>;

  abstract get(): T;

  abstract chain<U>(chainer: (source: T) => Optional<U>): Optional<U>;

  abstract orElseGet(factory: () => T): T;
}

class EmptyOptional<T> extends Optional<T> {
  isPresent(): boolean {
    return false;
  }

  isEmpty(): boolean {
    return true;
  }

  map<U>(): Optional<U> {
    return Optional.empty();
  }

  get(): T {
    throw new Error("Empty optional");
  }

  chain<U>(): Optional<U> {
    return Optional.empty();
  }

  orElseGet(factory: () => T): T {
    return factory();
  }
}

class ValuatedOptional<T> extends Optional<T> {
  constructor(private readonly value: T) {
    super();
  }

  isPresent(): boolean {
    return true;
  }

  isEmpty(): boolean {
    return false;
  }

  map<U>(mapper: (source: T) => U): Optional<U> {
    return Optional.of(mapper(this.value));
  }

  get(): T {
    return this.value;
  }

  chain<U>(chainer: (source: T) => Optional<U>): Optional<U> {
    return chainer(this.value);
  }

  orElseGet(): T {
    return this.value;
  }
}
