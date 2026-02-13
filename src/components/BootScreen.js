import { setState, STATES } from '../core/state'

export function renderBoot(root) {
  root.innerHTML = `
    <div id="boot">
      <p>Initializing system...</p>
      <p>Loading profile data...</p>
      <p id="boot-status">Ready.</p>
      <p>Press ENTER to continue</p>
    </div>
  `

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      setState(STATES.MENU)
      location.hash = '#/menu'
      document.removeEventListener('keydown', handleKey)
    }
  }

  document.addEventListener('keydown', handleKey)
}
