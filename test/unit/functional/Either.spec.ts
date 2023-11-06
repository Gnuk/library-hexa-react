import { describe, it, expect, vi } from 'vitest';
import { Either, Ok, Err } from '@/functional/Either';

describe('Either', () => {
  describe('Ok', () => {
    const good: Either<Error, string> = Either.ok('Good');
    it('Should get good value', () => {
      expect(good).toEqual(Ok.of('Good'));
    });

    it('Should map', () => {
      expect(good.map(right => `${right} Morning!`)).toEqual(Ok.of('Good Morning!'));
    });

    it('Should not map error', () => {
      expect(good.mapErr(err => new Error(err.message + '!'))).toEqual(Ok.of('Good'));
    });

    it('Should evaluate value', () => {
      const spyErr = vi.fn();
      const spyOk = vi.fn();

      good.evaluate(spyErr, spyOk);

      expect(spyErr).not.toHaveBeenCalled();
      expect(spyOk).toBeCalledWith('Good');
    });

    it('Should convert a value', () => {
      expect(Either.tryFrom(() => 'Good')).toEqual(Ok.of('Good'));
    });
  });

  describe('Error', () => {
    const ERROR = new Error('Something is wrong');
    const error: Err<Error, string> = Either.err(ERROR);

    it('Should be ko for bad value', () => {
      expect(error).toEqual(Err.of(ERROR));
    });

    it('Should not map', () => {
      expect(error.map(right => `${right} Morning!`)).toEqual(Err.of(ERROR));
    });

    it('Should map error', () => {
      expect(error.mapErr(err => new Error(err.message + '!'))).toEqual(Err.of(new Error('Something is wrong!')));
    });

    it('Should evaluate error', () => {
      const spyErr = vi.fn();
      const spyOk = vi.fn();

      error.evaluate(spyErr, spyOk);

      expect(spyErr).toBeCalledWith(ERROR);
      expect(spyOk).not.toHaveBeenCalled();
    });

    it('Should convert a throwing error', () => {
      expect(
        Either.tryFrom(() => {
          throw ERROR;
        })
      ).toEqual(Err.of(ERROR));
    });
  });
});
