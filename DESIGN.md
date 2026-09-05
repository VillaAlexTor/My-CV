---
name: Villa_OS
description: Dossier técnico de ciberseguridad tallado en piedra profunda y recorrido por señales Redstone.
colors:
  void-ink: "#090b0a"
  deep-stone: "#131714"
  raised-stone: "#1c221e"
  dossier-bone: "#e8eddf"
  telemetry-muted: "#9ca89d"
  redstone-signal: "#f04432"
  redstone-depth: "#8f201a"
  instrument-lime: "#b8f34a"
  structural-line: "#334038"
  signal-white: "#fff"
typography:
  display:
    fontFamily: "Pixelify Sans, sans-serif"
    fontSize: "clamp(3.8rem, 8vw, 8rem)"
    fontWeight: 700
    lineHeight: 0.76
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Pixelify Sans, sans-serif"
    fontSize: "clamp(2.7rem, 5.7vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.03em"
  title:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "23px"
    fontWeight: 700
  body:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    letterSpacing: "0.12em"
rounded:
  square: "0"
components:
  action-solid:
    backgroundColor: "{colors.void-ink}"
    textColor: "{colors.dossier-bone}"
    rounded: "{rounded.square}"
    padding: "18px 22px"
  action-outline:
    backgroundColor: "transparent"
    textColor: "{colors.dossier-bone}"
    rounded: "{rounded.square}"
    padding: "10px 14px"
  action-skip:
    backgroundColor: "{colors.instrument-lime}"
    textColor: "{colors.void-ink}"
    rounded: "{rounded.square}"
    padding: "12px 16px"
  project-node:
    backgroundColor: "{colors.raised-stone}"
    textColor: "{colors.dossier-bone}"
    rounded: "{rounded.square}"
    size: "115px"
  stack-cell:
    backgroundColor: "{colors.redstone-signal}"
    textColor: "{colors.signal-white}"
    rounded: "{rounded.square}"
    padding: "24px 12px"
---

# Design System: Villa_OS

## Overview

**Creative North Star: "El Dossier Redstone"**

Villa_OS se comporta como un expediente de seguridad abierto sobre piedra profunda: oscuro, preciso y construido para inspección. Las señales Redstone no decoran; hacen visible progreso, conexión, énfasis y estado. El hueso sostiene la lectura y la lima aparece como instrumentación de alta precisión.

La interfaz combina la contundencia cúbica de Minecraft con la disciplina de un visor técnico. La geometría es recta, los bordes son visibles y los recortes pixelados aparecen solo donde explican identidad o función. El resultado debe sentirse capaz, directo y curioso, nunca corporativo-genérico.

**Key Characteristics:**

- Piedra casi negra y superficies tonales sin suavizado ornamental.
- Rojo Redstone como señal operativa y columna narrativa.
- Tipografía display cúbica emparejada con lectura sobria y técnica.
- Retículas, coordenadas y líneas que comunican inspección y conexión.
- Contraste abrupto entre tramos oscuros, hueso y rojo para estructurar el recorrido.

## Colors

La paleta es mineral y de alto contraste: negros verdosos, hueso legible, rojo energético y lima instrumental.

### Primary

- **Señal Redstone:** comunica progreso, foco narrativo, conexiones, estados activos y grandes campos de énfasis; su rareza dentro de las zonas oscuras conserva su fuerza.
- **Profundidad Redstone:** da volumen exclusivamente a campos rojos mediante sombras duras y contraste tonal.

### Secondary

- **Lima instrumental:** identifica telemetría, datos verificados, enlaces técnicos y foco de teclado; no compite con Redstone como color de marca principal.

### Neutral

- **Tinta de vacío:** fondo raíz y texto sobre superficies claras.
- **Piedra profunda:** carriles y superficies oscuras de primer nivel.
- **Piedra elevada:** nodos y bloques técnicos que deben separarse del fondo sin flotar.
- **Hueso de dossier:** texto principal y superficies editoriales claras.
- **Telemetría atenuada:** metadatos, notas y contenido subordinado.
- **Línea estructural:** divisores, marcos y conexiones pasivas.
- **Blanco de señal:** contraste máximo dentro de campos Redstone.

### Named Rules

**The Signal Has Meaning Rule.** Reserva Redstone para progreso, relación, énfasis o estado; una superficie roja completa es una decisión estructural, no relleno casual.

**The Lime Instrument Rule.** Usa la lima como lectura de instrumento —telemetría, verificación, foco o enlace técnico— y no como segundo acento decorativo.

## Typography

**Display Font:** Pixelify Sans (con `sans-serif` como fallback)  
**Body Font:** IBM Plex Sans (con `sans-serif` como fallback)

**Character:** Pixelify Sans aporta bloques compactos y una identidad cúbica inequívoca. IBM Plex Sans mantiene datos, párrafos y navegación nítidos, profesionales y fáciles de escanear.

### Hierarchy

- **Display** (700, escala fluida de gran formato, interlínea muy cerrada): reservado para nombres y títulos de sección que actúan como masa visual.
- **Headline** (700, escala fluida media-grande, interlínea cerrada): encabeza argumentos editoriales y contrastes de idea.
- **Title** (700, tamaño compacto): nombra capacidades dentro de filas de lectura rápida.
- **Body** (400–600, lectura generosa): explica experiencia y sistemas; los párrafos principales se mantienen aproximadamente entre 38 y 59 caracteres por línea.
- **Label** (500–700, pequeño, tracking amplio y uso frecuente de mayúsculas): codifica navegación, coordenadas, metadatos y estados.

### Named Rules

**The Block and Brief Rule.** Pixelify Sans declara; IBM Plex Sans explica. No uses la display para párrafos ni Plex para imitar titulares cúbicos.

## Layout

El sistema alterna paneles de lectura con módulos de inspección. En escritorio, las superficies principales usan rejillas asimétricas de dos columnas, separaciones amplias y un margen horizontal fluido; la cabecera fija conserva una altura compacta y el contenido se organiza mediante bordes continuos.

El ritmo espacial es deliberadamente amplio entre secciones y denso dentro de filas técnicas. Los bloques de contenido usan padding fluido con `clamp()`, mientras los metadatos y controles permanecen compactos. A 800px o menos, las rejillas pasan a una columna, la navegación se convierte en panel desplegable, los módulos inclinados recuperan un plano frontal y las cadenas horizontales pueden desplazarse.

El retrato como visor, la red del proyecto y la cadena criptográfica son expresiones específicas del CV; nuevas superficies deben reutilizar su gramática de inspección, conexión y estado sin copiar esas composiciones literalmente.

## Elevation & Depth

El sistema es plano por defecto. La profundidad nace de capas tonales, marcos de un píxel, fondos divididos, retículas de baja opacidad y perspectiva puntual. Las sombras no crean tarjetas blandas: refuerzan volumen de píxel, señal activa o separación física de nodos.

### Shadow Vocabulary

- **Bloque tallado** (`5px 6px 0` con tono de piedra): desplaza titulares cúbicos para darles masa material.
- **Nodo suspendido** (`12px 14px 30px rgba(0,0,0,.45)`): separa nodos del plano de red cuando la visualización necesita profundidad.
- **Señal energizada** (`0 0 20px 3px rgba(240,68,50,.45)`): acompaña exclusivamente líneas o sensores Redstone activos.

### Named Rules

**The Flat Stone Rule.** Mantén las superficies planas en reposo; añade sombra solo cuando explique masa, actividad o jerarquía espacial.

## Shapes

La forma base es ortogonal y sin radio. Los marcos son líneas de un píxel, las celdas comparten bordes y los módulos se perciben ensamblados sobre una retícula. Los recortes poligonales crean esquinas pixeladas en marcas, cuerpos y visores; son acentos de identidad, no un tratamiento universal.

**The Cut With Purpose Rule.** Recorta una silueta solo para señalar identidad, máscara o ensamblaje; los contenedores de lectura permanecen rectos y simples.

## Components

### Buttons

- **Shape:** rectangular y sin radio; el borde o el campo tonal define la acción.
- **Primary:** acción sólida en tinta sobre hueso, con padding compacto y un icono direccional alineado al texto.
- **Hover / Focus:** los enlaces de navegación cambian a lima; toda acción interactiva recibe un contorno de lima de dos píxeles separado del borde.
- **Secondary:** acción transparente con borde Redstone para contacto dentro de superficies oscuras.
- **Skip action:** campo lima con texto tinta; permanece fuera del viewport hasta recibir foco.

### Cards / Containers

- **Corner Style:** cuadrado.
- **Background:** piedra profunda o elevada para módulos técnicos; hueso para tramos editoriales de lectura.
- **Shadow Strategy:** tonal y estructural; solo los nodos de red reciben una sombra suspendida.
- **Border:** línea estructural de un píxel; las listas claras usan divisores más suaves.
- **Internal Padding:** compacto en nodos y celdas, amplio en secciones.

### Navigation

La barra fija es translúcida, oscura y delimitada por una línea estructural. La marca usa Pixelify Sans y una inicial roja recortada; los enlaces son etiquetas Plex en mayúsculas con tracking amplio. En móvil, el botón de menú abre una columna oscura de ancho completo y conserva el mismo divisor inferior.

### Technical Labels

Coordenadas, códigos, hashes y nombres de nodos usan escala pequeña, peso medio o fuerte y espaciado de letras amplio. Lima indica lectura instrumental; Redstone identifica el código que organiza una lista.

### Network Nodes

Los nodos son cuadrados de piedra elevada con borde Redstone y etiqueta display centrada. Un nodo activo puede llenarse de Redstone; las líneas de tres píxeles materializan dependencias. Esta es una gramática reutilizable para relaciones técnicas, no una plantilla obligatoria de proyecto.

## Do's and Don'ts

### Do:

- **Do** usa Redstone para hacer legibles progreso, conexión, actividad y énfasis real.
- **Do** conserva la separación de roles entre Pixelify Sans e IBM Plex Sans.
- **Do** construye jerarquía con contraste tonal, divisores y espacios amplios antes de añadir sombras.
- **Do** garantiza foco visible en lima, navegación por teclado y una alternativa estática con movimiento reducido.
- **Do** adapta las rejillas a una columna y elimina transformaciones de perspectiva en pantallas estrechas.

### Don't:

- **Don't** añadas radios suaves, degradados brillantes o tarjetas flotantes que diluyan la geometría mineral.
- **Don't** uses rojo y lima como adornos intercambiables; cada uno comunica una clase distinta de señal.
- **Don't** conviertas retículas, coordenadas o recortes pixelados en ruido continuo.
- **Don't** copies el visor de retrato, la red de Cóndor o la cadena NUGEO como composición universal.
- **Don't** ocultes información esencial detrás de hover, puntero preciso o animación obligatoria.
