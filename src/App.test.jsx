import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import App from './App';

describe('Portafolio - Juan Cruz Larcher', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renderiza correctamente el nombre del autor y la navegación', () => {
    render(<App />);
    
    // Verificar encabezado principal con el nombre
    expect(screen.getAllByText(/Juan Cruz/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Larcher/i).length).toBeGreaterThan(0);
    
    // Verificar que existen los enlaces del menú
    expect(screen.getAllByText(/Inicio/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Contacto/i).length).toBeGreaterThan(0);
  });

  it('permite alternar el idioma entre Español e Inglés y actualiza el atributo html lang', async () => {
    render(<App />);

    // Idioma inicial en español
    expect(document.documentElement.lang).toBe('es');
    expect(screen.getByText(/Player 1: Acerca de mí/i)).toBeInTheDocument();

    // Botón para cambiar a inglés (usando el aria-label o texto)
    const langButtons = screen.getAllByRole('button', { name: /Cambiar idioma a inglés/i });
    expect(langButtons.length).toBeGreaterThan(0);
    fireEvent.click(langButtons[0]);

    // Debe cambiar a inglés
    await waitFor(() => {
      expect(document.documentElement.lang).toBe('en');
    });
    expect(screen.getByText(/Player 1: About Me/i)).toBeInTheDocument();
  });

  it('abre el modal de documentación técnica al hacer click en "Ver Docs & Fotos" y permite cerrarlo', async () => {
    render(<App />);

    // Buscar el botón de ver documentación
    const docsButtons = screen.getAllByRole('button', { name: /Ver documentación de/i });
    expect(docsButtons.length).toBeGreaterThan(0);

    // Abrir el modal del primer proyecto
    fireEvent.click(docsButtons[0]);

    // El modal accesible debe aparecer con role="dialog"
    const modal = await screen.findByRole('dialog');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveAttribute('aria-modal', 'true');

    // Cerrar el modal haciendo click en el botón de cerrar
    const closeButton = screen.getByTitle(/Cerrar modal/i);
    fireEvent.click(closeButton);

    // Debe desaparecer del DOM
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });
});
