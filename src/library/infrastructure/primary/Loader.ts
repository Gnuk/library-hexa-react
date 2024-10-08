export const LoadingInProgress = Symbol();
export const LoadingError = Symbol();
export const LoadingSuccess = Symbol();

type LoadingStatus = typeof LoadingError | typeof LoadingInProgress | typeof LoadingSuccess;

interface LoadWithStatus {
  status: LoadingStatus;
}

export interface LoadSuccess<T> extends LoadWithStatus {
  content: T;
  status: typeof LoadingSuccess;
}

export interface LoadError extends LoadWithStatus {
  errorMessage: string;
  status: typeof LoadingError;
}

export interface LoadInProgress extends LoadWithStatus {
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
