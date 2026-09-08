# Villa // Security CV

CV interactivo de Alexander Jonathan Villarroel Torrico, construido con React, TypeScript, Tailwind CSS y Vite.

## Ejecutar

```bash
npm install
npm run dev
```

## Secuencia del retrato

La animación usa los 47 fotogramas numerados de `public/portraits/1.png` a `public/portraits/47.png`. El hero permanece fijado mientras el desplazamiento controla directamente un único canvas HTML5: bajar avanza la secuencia y subir la reproduce en reversa.

En escritorio se precargan los 47 fotogramas antes de activar la secuencia. En móvil se usa una muestra alternada que conserva los extremos para reducir memoria y transferencia. Con `prefers-reduced-motion` se muestra un fotograma estático.

## Datos pendientes

- Reemplazar el texto de LinkedIn cuando exista una URL verificada.
- Añadir un canal de contacto adicional si se desea publicar correo o teléfono.
