import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ContactSection from './ContactSection.jsx'

describe('ContactSection', () => {
  it('muestra los enlaces de contacto con sus destinos', () => {
    render(<ContactSection />)

    expect(screen.getByRole('heading', { name: 'Contacto' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute(
      'href',
      'mailto:brun.rivera@duocuc.cl',
    )
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/briveraac',
    )
    expect(screen.getAllByRole('link')).toHaveLength(6)
  })
})
