// global.d.ts
declare global {
  interface Window {
    L: typeof import('leaflet');
  }
}

export {};
