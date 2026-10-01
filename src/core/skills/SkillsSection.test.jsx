import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import SkillsSection from './SkillsSection.jsx'

describe('SkillsSection', () => {
  it('muestra las cinco habilidades del portfolio', () => {
    render(<SkillsSection />)

    expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(5)
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('SQL')).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
    expect(screen.getByText('HTML')).toBeInTheDocument()
    expect(screen.getByText('CSS')).toBeInTheDocument()
  })
})
