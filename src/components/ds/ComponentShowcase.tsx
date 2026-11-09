
import { useState } from 'preact/hooks'
import { Button } from '../ui/Button'

export function ComponentShowcase () {
  const [selected, setSelected] = useState(false)
  const [clicks, setClicks] = useState(0)

  return (
    <main class="mx-auto max-w-5xl space-y-8 p-8">
      <header>
        <h1 class="text-3xl font-semibold">Design System</h1>
        <p class="mt-2 text-(--ui-muted)">
          Switch UI · Componentes y estados
        </p>
      </header>

      <section class="space-y-5 rounded-2xl border border-(--ui-border) p-6">
        <h2 class="text-xl font-medium">Button</h2>

        <div class="space-y-3">
          <h3 class="text-sm text-(--ui-muted)">Variantes</h3>
          <div class="flex flex-wrap items-center gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </div>

        <div class="space-y-3">
          <h3 class="text-sm text-(--ui-muted)">Tamaños</h3>
          <div class="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        <div class="space-y-3">
          <h3 class="text-sm text-(--ui-muted)">Estados</h3>
          <div class="flex flex-wrap items-center gap-3">
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
            <Button
              variant="secondary"
              selected={selected}
              aria-pressed={selected}
              onClick={() => setSelected(!selected)}
            >
              {selected ? 'Selected' : 'Select me'}
            </Button>
          </div>
        </div>

        <div class="space-y-3">
          <h3 class="text-sm text-(--ui-muted)">Interacción</h3>
          <Button onClick={() => setClicks(n => n + 1)}>
            Clicks: {clicks}
          </Button>
          <p class="text-sm text-(--ui-muted)">
            Usá Tab para comprobar el estado de foco.
          </p>
        </div>

        <div class="space-y-3">
          <h3 class="text-sm text-(--ui-muted)">Ancho completo</h3>
          <Button fullWidth>Continue</Button>
        </div>
      </section>
    </main>
  )
}
