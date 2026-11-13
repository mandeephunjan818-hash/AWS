// app/types/clarity.d.ts
export {};

declare global {
  interface Window {
    clarity: (command: string, ...args: any[]) => void;
  }
}