import { Either } from '@/functional/Either';
import { useState } from 'react';

const IN_PROGRESS = Symbol();
const SUCCESS = Symbol();
const FAILURE = Symbol();

type LoadingStatus =
  | typeof IN_PROGRESS
  | typeof SUCCESS
  | typeof FAILURE;

interface Loaded {
  errorMessage: string;
  isInProgress: boolean;
  isSuccessful: boolean;
  isFailing: boolean;
}

export const useLoadEither = <T>(promise: Promise<Either<Error, T>>, then: (value: T) => void): Loaded => {
  const [errorMessage, setErrorMessage] = useState('');
  const [status, setStatus] = useState<LoadingStatus>(IN_PROGRESS);

  const errorLoad = (err: Error) => {
    setErrorMessage(err.message);
    setStatus(FAILURE);
  };

  const successLoad = (either: Either<Error, T>) =>
    either.evaluate(errorLoad, (value) => {
      then(value);
      setStatus(SUCCESS);
    });

  promise.then(successLoad).catch(errorLoad);

  const is = (to: LoadingStatus): boolean => status === to;

  return {isInProgress: is(IN_PROGRESS), isSuccessful: is(SUCCESS), isFailing: is(FAILURE), errorMessage};
}
