import { setState, STATES } from '../core/state'

const menuItems = ['about', 'skills', 'projects', 'contact']

let selectedIndex = 0

export function renderMenu(root) {
  setState(STATES.MENU)
  draw(root)

  function handleKey(e) {
    if (e.key === 'ArrowDown') {
      selectedIndex = (selectedIndex + 1) % menuItems.length
      draw(root)
    }

    if (e.key === 'ArrowUp') {
      selectedIndex =
        (selectedIndex - 1 + menuItems.length) % menuItems.length
      draw(root)
    }

    if (e.key === 'Enter') {
      location.hash = `#/${menuItems[selectedIndex]}`
      document.removeEventListener('keydown', handleKey)
    }
  }

  document.addEventListener('keydown', handleKey)
}

function draw(root) {
  root.innerHTML = `
    <div id="menu">
      ${menuItems
        .map((item, index) => {
          const pointer = index === selectedIndex ? '>' : '&nbsp;'
          return `<p>${pointer} ${item.toUpperCase()}</p>`
        })
        .join('')}
    </div>
  `
}
