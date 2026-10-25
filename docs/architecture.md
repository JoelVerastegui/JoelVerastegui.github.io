# Arquitectura

## File System

```
my-portfolio-v2/
├── docs/
│   └── architecture.md     # Este documento
├── src/
│   ├── assets/             # Iconos, imágenes y estilos globales
│   │   └── projects/       # Imágenes de los proyectos (referenciadas desde el JSON)
│   ├── components/         # Todos los componentes de la aplicación
│   │   ├── ui/             # Elementos base (Button, Input, Card)
│   │   └── layout/         # Estructura visual (Navbar, Sidebar, Footer)
│   ├── data/               # Datos estáticos. Contiene el JSON con la información de los proyectos
│   ├── hooks/              # Custom hooks (tanto de lógica de negocio como globales)
│   ├── services/           # Llamadas a la API y configuración de Axios/Fetch
│   ├── interfaces/         # Tipos TypeScript (DTOs / modelos)
│   ├── utils/              # Funciones de ayuda (formateadores de fechas, validadores)
│   ├── App.tsx             # Contenedor principal
│   └── main.tsx            # Punto de entrada
```

## Datos de proyectos

- La información de los proyectos vive en un JSON dentro de `src/data/` (p. ej. `projects.json`).
- Las imágenes de cada proyecto van en `src/assets/projects/` y el JSON las referencia.
- El esquema del JSON se define al implementar el diseño base; su interfaz TypeScript va en `src/interfaces/`.
