import { ReactElement } from 'react';

const LoadingInProgress = Symbol();
const LoadingError = Symbol();
const LoadingSuccess = Symbol();

type LoadingStatus = typeof LoadingError | typeof LoadingInProgress | typeof LoadingSuccess;

interface LoadWithStatus {
  status: LoadingStatus;
}

interface LoadSuccess<T> extends LoadWithStatus {
  content: T;
  status: typeof LoadingSuccess;
}

interface LoadError extends LoadWithStatus {
  errorMessage: string;
  status: typeof LoadingError;
}

interface LoadInProgress extends LoadWithStatus {
  status: typeof LoadingInProgress;
}

export type Loader<T> = LoadSuccess<T> | LoadError | LoadInProgress;

export const loadInProgress = (): LoadInProgress => ({ status: LoadingInProgress });

export const loadSuccess = <T>(content: T): LoadSuccess<T> => ({
  content,
  status: LoadingSuccess,
});

export const loadError = (errorMessage: string): LoadError => ({
  errorMessage,
  status: LoadingError,
});

type LoaderCallback<T> = {
  success: (content: T) => ReactElement;
  error: (message: string) => ReactElement;
  progress: () => ReactElement;
};

export const loadFor =
  <T>(loader: Loader<T>) =>
  ({ success, error, progress }: LoaderCallback<T>): ReactElement => {
    switch (loader.status) {
      case LoadingInProgress:
        return progress();
      case LoadingError:
        return error(loader.errorMessage);
      case LoadingSuccess:
        return success(loader.content);
    }
  };