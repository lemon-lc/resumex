declare module '*.svg';
declare module '*.less';

declare module '*.json' {
  const value: any;
  export const version: string;
  export default value;
}
