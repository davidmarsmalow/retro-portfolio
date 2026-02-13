export function renderAbout(root) {
  root.innerHTML = `
    <section class="retro-about">

      <div class="portrait-box">
        <img src="/images/pixel-david.png" alt="Pixel David">
      </div>

      <div class="info-box">
        <h1>DAVID</h1>
        <p class="role">Backend Developer</p>

        <div class="description">
          <p>> Building modern web applications</p>
          <p>> Clean architecture enthusiast</p>
          <p>> Loves reactive systems</p>
        </div>

        <div class="techstack">
          <div class="tech">
            <img src="/icons/laravel-pixelated.png" alt="Laravel">
            <span>Laravel</span>
          </div>
          <div class="tech">
            <img src="/icons/livewire-pixelated.png" alt="Livewire">
            <span>Livewire</span>
          </div>
          <div class="tech">
            <img src="/icons/tailwind-pixelated.png" alt="Tailwind">
            <span>Tailwind</span>
          </div>
        </div>

        <p class="back-hint">Press ESC to go back</p>
      </div>

    </section>
  `

  const handleKey = (e) => {
    if (e.key === 'Escape') {
      location.hash = '#/menu'
      document.removeEventListener('keydown', handleKey)
    }
  }

  document.addEventListener('keydown', handleKey)
}
