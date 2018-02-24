export function stateUpdate(path, value) {
  return {
    type: 'STATE_UPDATE',
    path: path,
    value: value,
  }
}
