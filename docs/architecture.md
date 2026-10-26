# Arquitectura

## File System

```
my-portfolio-v2/
├── docs/
│   └── architecture.md     # Este documento
├── src/
│   ├── assets/             # Iconos, imágenes y estilos globales
│   │   ├── face.png        # Foto de perfil (Hero)
│   │   └── projects/       # Imágenes de los proyectos (referenciadas desde el JSON)
│   ├── components/         # Todos los componentes de la aplicación
│   │   ├── ui/             # Elementos base (Button, TechChip, PhoneFrame, BrowserFrame, Shot, MediaPanel)
│   │   ├── layout/         # Estructura visual (Navbar, Footer)
│   │   ├── sections/       # Secciones de la página de inicio (Hero, Projects, About, Skills, Contact)
│   │   └── project/        # Caso de estudio (ProjectDetail, Gallery, Lightbox)
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
- Esquema: interfaz `Project` en `src/interfaces/project.ts`. Cada captura (`screenshots[].image`) es el nombre de un archivo de `src/assets/projects/`; sin `image` se muestra un placeholder.
- `src/data/profile.json` (datos personales y enlaces) y `src/data/skills.json` (habilidades) completan el contenido; sus tipos están en `src/interfaces/profile.ts`.

## Navegación

Ruteo por hash sin librería (`src/hooks/useHashRoute.ts`): `#/` es el inicio y `#/proyecto/:id` el caso de estudio.
