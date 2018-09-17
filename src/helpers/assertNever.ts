export function assertNever(x: never) {
  return new Error('Unexpected object: ' + x);
}
