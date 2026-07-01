# Architecture Design - SHA Web

## 1. Estructura del Proyecto (Next.js App Router)
Para mantener un código limpio y escalable, utilizaremos una arquitectura híbrida: la carpeta `app/` se encargará exclusivamente de las rutas, layouts y contenedores de páginas, mientras que los componentes reutilizables se centralizarán en una carpeta raíz `components/`.

Cuando iniciemos la etapa de código, el árbol de directorios definitivo se verá así:

```text
sha-web/
├── docs/                     # Documentación del proyecto (Planificación)
├── public/                   # Archivos estáticos (Imágenes, SVG, Logos, Favicon)
├── components/               # Componentes globales y reutilizables
│   ├── ui/                   # Componentes atómicos (Button, Input, Card, Table)
│   ├── common/               # Componentes estructurales (Navbar, Footer, Sidebar)
│   └── feedback/             # Componentes de estado (Spinner, Alert, Modal)
├── app/                      # Sistema de rutas (App Router)
│   ├── layout.tsx            # Layout global (RootLayout, Tipografías, SEO base)
│   ├── page.tsx              # Home Page (/)
│   ├── sobre-sha/            # Ruta /sobre-sha
│   │   └── page.tsx
│   ├── como-funciona/        # Ruta /como-funciona
│   │   └── page.tsx
│   ├── seguridad/            # Ruta /seguridad
│   │   └── page.tsx
│   ├── resultados/           # Ruta /resultados
│   │   └── page.tsx
│   ├── planes/               # Ruta /planes
│   │   └── page.tsx
│   ├── faq/                  # Ruta /faq
│   │   └── page.tsx
│   ├── contacto/             # Ruta /contacto
│   │   ├── page.tsx
│   │   └── _components/      # Componentes exclusivos de la página de contacto
│   └── globals.css           # Estilos CSS globales (Reset y variables)
├── styles/                   # Configuración y mixins de estilos globales
├── lib/                      # Configuraciones de herramientas (Instancias de Axios/Fetch)
├── hooks/                    # Custom Hooks globales (ej. useWindowSize)
└── utils/                    # Funciones utilitarias puras (Formateadores de fechas o números)