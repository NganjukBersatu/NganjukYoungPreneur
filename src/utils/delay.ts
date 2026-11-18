// Jeda animasi masuk bertahap (0ms, 100ms, 200ms, ...)
export const delay = (i: number) => ({ '--d': `${i * 100}ms` })