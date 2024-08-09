import {ReactElement} from "react";
import {Loader, LoadingError, LoadingInProgress, LoadingSuccess} from "@/library/infrastructure/primary/Loader.ts";

type LoaderCallback<T> = {
  success: (content: T) => ReactElement;
  error: (message: string) => ReactElement;
  progress: () => ReactElement;
};

export const reactLoadFor =
  <T>(loader: Loader<T>) =>
    ({success, error, progress}: LoaderCallback<T>): ReactElement => {
      switch (loader.status) {
        case LoadingInProgress:
          return progress();
        case LoadingError:
          return error(loader.errorMessage);
        case LoadingSuccess:
          return success(loader.content);
      }
    };
