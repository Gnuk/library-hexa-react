import { createContext, Context } from 'react';

export const provideContext = <T>(): Context<T> => createContext<T>(null as unknown as T);
