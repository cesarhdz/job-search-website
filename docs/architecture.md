# Arquitectura del sitio

## Propósito

El sitio es la entrada pública al proyecto.

Tiene dos responsabilidades:

1. orientar a una persona durante una búsqueda de trabajo;
2. mantener una base de conocimiento pequeña y curada.

El producto open source y la plataforma hosted viven en repositorios separados.

## Alcance inicial

- español como idioma del sitio;
- México como mercado principal;
- perfiles profesionales digitales y de tecnología;
- usuarios que ya usan IA de manera práctica, más allá del chat casual.

El alcance puede ampliarse después sin convertir el sitio en un catálogo global desde el primer día.

## Stack

- Astro + TypeScript
- salida estática
- Astro Content Collections para contenido tipado
- CSS simple inicialmente
- GitHub Pages
- contribuciones editoriales mediante pull requests

V1 no necesita base de datos, CMS, runtime de servidor, autenticación ni analytics.

## Modelo de contenido

### Etapas

Secciones estables del proceso de búsqueda. Definen la arquitectura de información.

### Recursos

Artículos, videos, herramientas, servicios y comunidades externos, evaluados para una etapa y audiencia concreta.

Cada recurso registra idioma, mercado relevante, estado editorial y relación comercial.

### Guías del producto

Más adelante se pueden agregar instrucciones específicas para conectar un AI host, importar una memoria o usar tracking.

## Publicación

```text
contribuidor
    |
    v
pull request
    |
    v
validación de schema + build
    |
    v
revisión editorial
    |
    v
main
    |
    v
GitHub Pages
```

Por ahora, el owner del repositorio mantiene la aprobación editorial final.

## Después, sólo si hace falta

- dominio propio
- buscador
- RSS
- revisión automática de links
- analytics mínimos y respetuosos de privacidad
- formularios que creen PRs para contribuciones
- soporte explícito para otros mercados o idiomas
