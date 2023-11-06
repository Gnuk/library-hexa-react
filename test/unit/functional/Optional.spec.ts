import { describe, it, expect } from 'vitest';
import { Optional } from '@/functional/Optional';

const anwser = (): Optional<number> => Optional.of(42);

describe('Optional', () => {
  describe('Empty', () => {
    it('Should get information', () => {
      expect(Optional.empty().isEmpty()).toBe(true);
      expect(Optional.empty().isPresent()).toBe(false);
      expect(() => Optional.empty().get()).toThrow('Empty optional');
    });

    it('Should map to empty', () => {
      expect(
        Optional.empty()
          .map(() => 'toto')
          .isEmpty()
      ).toBe(true);
    });

    it('Should chain with empty optional', () => {
      expect(
        Optional.empty()
          .chain(() => Optional.empty())
          .isEmpty()
      ).toBe(true);
    });

    it('Should get fallback value from or else get', () => {
      expect(Optional.empty().orElseGet(() => 51)).toBe(51);
    });
  });

  describe('Valuated', () => {
    it('Should get information', () => {
      const optional = Optional.of('toto');
      expect(optional.isEmpty()).toBe(false);
      expect(optional.isPresent()).toBe(true);
      expect(optional.get()).toBe('toto');
    });

    it('Should map', () => {
      expect(
        anwser()
          .map(source => `answer ${source}`)
          .get()
      ).toBe('answer 42');
    });

    it('Should chain with empty optional', () => {
      expect(
        anwser()
          .chain(() => Optional.empty())
          .isEmpty()
      ).toBe(true);
    });

    it('Should chain with valuated optional', () => {
      expect(
        anwser()
          .chain(source => Optional.of(`answer ${source}`))
          .get()
      ).toBe('answer 42');
    });

    it('Should get original value from or else get', () => {
      expect(anwser().orElseGet(() => 51)).toBe(42);
    });
  });
});
