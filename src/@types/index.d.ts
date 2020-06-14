export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

declare module '*.svg';
declare module '*.jpg';
declare module '*.png';
