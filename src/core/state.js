export const STATES = {
  BOOT: 'BOOT',
  MENU: 'MENU',
  PAGE: 'PAGE'
}

let currentState = STATES.BOOT

export function setState(state) {
  currentState = state
}

export function getState() {
  return currentState
}
