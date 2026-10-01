import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import Layout from './Layout.jsx'

describe('Layout', () => {
  it('muestra la navegación y marca la ruta activa', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/contact" element={<p>Contacto cargado</p>} />
          </Route>
        </Routes>
      </MemoryRouter>,
    )

    expect(screen.getByRole('link', { name: 'Inicio' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'Contacto' })).toHaveAttribute('href', '/contact')
    expect(screen.getByRole('link', { name: 'Contacto' })).toHaveClass('active')
    expect(screen.getByText('Contacto cargado')).toBeInTheDocument()
  })
})
