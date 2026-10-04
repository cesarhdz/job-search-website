---
status: draft
---

# PRD 0001 — Fuentes

## Problema

Buscar trabajo suele convertirse en revisar demasiados sitios sin saber cuáles realmente aportan para un perfil, mercado o modalidad.

La sección debe ayudar a responder:

> **¿Dónde vale la pena buscar para mi caso?**

No debe convertirse en una lista infinita de links. Debe funcionar como un catálogo editorial que pueda crecer sin perder estructura ni criterio.

## Resultado esperado

Una sección pública y estática en español que:

- ayude a elegir qué tipos de fuentes conviene usar;
- genere prompts que permitan construir una lista personalizada con IA;
- explique los distintos tipos de fuentes y muestre ejemplos curados;
- tenga una página propia para cada fuente con información más detallada;
- distinga entre fuentes descubiertas y fuentes editorialmente validadas;
- permita crecer mediante contenido estructurado en el repositorio, sin backend;
- pueda exponer los datos estructurados para reutilizarlos fuera de la UI.

## Modelo de dominio

### Source

Una fuente es un lugar, servicio o canal que puede ayudar a descubrir oportunidades laborales.

Ejemplos: LinkedIn Jobs, OCC, Greenhouse, Remote.co o una comunidad profesional.

Cada fuente es una entidad independiente y puede tener su propia página.

Schema inicial:

```yaml
name:
slug:
url:
status: candidate | reviewed
published: false

type:
markets: []
profiles: []
work_modes: []
languages: []

description:
best_for:
limitations: []

logo:
image:

cost:
account_required:
alerts:

last_reviewed:
```

`status` y `published` representan dimensiones independientes: `status` describe la madurez editorial; `published` controla si la fuente forma parte del catálogo público.

Los campos se dividen conceptualmente en:

- **datos estructurados** — permiten buscar, filtrar y construir vistas;
- **contenido editorial** — explica para qué sirve una fuente y cuáles son sus límites;
- **metadata editorial** — permite saber si la fuente fue revisada y cuándo.

El schema debe mantenerse pequeño. Se agregarán campos sólo cuando fuentes reales demuestren que hacen falta.

### SourceType

Clasifica una fuente por la forma en que ayuda a descubrir oportunidades.

Schema inicial:

```yaml
name:
slug:
description:
```

Tipos iniciales a validar durante la carga de contenido:

- bolsas de trabajo;
- ATS y páginas directas;
- remoto e internacional;
- recruiters/agencias;
- comunidades;
- empresas objetivo/directorios de empresas.

La taxonomía puede cambiar cuando se pruebe contra fuentes reales.

### Source vs. búsqueda

Una búsqueda configurada sobre una fuente no es una fuente nueva. Por ejemplo, `LinkedIn Jobs` es una fuente; `Product Engineer en México` o `Senior Product Manager en México` son búsquedas/presets que usan esa fuente.

El inventario inicial debe normalizar estas entradas en lugar de duplicar `Source`. Del mismo modo, una alerta es una capacidad de una fuente cuando aplique, no necesariamente una fuente independiente.

## Estados editoriales

### candidate

La fuente fue descubierta y parece potencialmente útil, pero todavía no fue revisada suficientemente para recomendarla o describirla públicamente.

Puede vivir en el repositorio independientemente de su visibilidad pública.

### reviewed

La fuente ya fue usada o revisada editorialmente y tiene evidencia suficiente para tratarla como parte del catálogo. Antes de publicarla, sus datos y copy pueden requerir una revisión de actualidad.

La transición de `candidate` a `reviewed` requiere comprobar como mínimo:

- que la fuente sigue activa;
- qué tipo de oportunidades contiene;
- para qué mercados/perfiles parece útil;
- modalidad o restricciones relevantes;
- URL oficial;
- copy editorial;
- fecha de revisión.

La publicación se controla por separado con `published`. Una fuente `reviewed` puede permanecer sin publicar, y cambiar su visibilidad no altera su estado editorial.

El inventario importado inicialmente comienza como `candidate` y `published: false`. Que una fuente estuviera activa en otro flujo de trabajo no implica que ya haya pasado la revisión editorial de este catálogo.

No se necesita un workflow más complejo en V1.

## Arquitectura de contenido

Astro funciona como CMS estático.

Las fuentes y tipos viven como contenido estructurado en el repositorio y se validan durante el build.

Conceptualmente:

```text
content
├── sources
│   ├── linkedin.*
│   ├── greenhouse.*
│   └── ...
└── source-types
    ├── job-board.*
    ├── ats.*
    └── ...
```

El formato concreto puede ser Markdown/MDX con frontmatter, YAML o JSON según lo que resulte más natural al implementar las Content Collections.

No se requiere backend ni base de datos.

## Rutas

### /fuentes/

Home y guía para construir una estrategia de fuentes.

Debe incluir:

- selección de tipos de fuentes;
- un prompt que se adapte a esa selección;
- explicación de bolsas/agregadores, ATS, agencias y empresas;
- ejemplos curados de fuentes importantes;
- acceso a páginas individuales cuando aporten instrucciones operativas.

La experiencia principal es **guidance-first**. La IA personaliza la lista; el sitio aporta estructura, ejemplos, instrucciones y límites.

### /fuentes/tipos/

Explica la taxonomía y cuándo sirve cada tipo de fuente.

Puede enlazar de vuelta al explorador con el tipo preseleccionado.

No se necesitan páginas individuales por tipo en V1.

### `/fuentes/{slug}/`

Página individual de una fuente.

Debe poder mostrar:

- nombre e identidad visual;
- descripción breve;
- para quién/qué sirve;
- mercados y perfiles relevantes;
- modalidad;
- costo, cuenta o alertas cuando aplique;
- limitaciones;
- fecha de última revisión;
- link al sitio oficial;
- fuentes relacionadas cuando tenga sentido.

Esta página es el lugar donde puede crecer el detalle sin saturar el explorador.

Comentarios, experiencias comunitarias, ratings u otras señales pueden añadirse más adelante si existe una necesidad clara; no forman parte del dominio V1.

## Personalización con IA

El sitio no intenta competir con la IA como buscador. La interfaz permite seleccionar tipos de fuentes y construir un prompt reutilizable para obtener una lista adaptada al perfil, mercado y modalidad del usuario.

El prompt debe poder orientar la búsqueda por:

- rol y seniority;
- ubicación y elegibilidad;
- modalidad;
- tipo de empresa;
- tipos de fuentes seleccionados.

Cuando una fuente tenga restricciones para bots o automatización, la guía debe explicarlo y proponer una forma manual, mediante alertas o mediante resultados compartidos por el usuario.

### Ejemplos curados

Las bolsas y agregadores importantes pueden mantenerse como un conjunto relativamente completo. Para ATS, agencias y empresas se priorizan ejemplos que enseñen el patrón de búsqueda en vez de intentar mantener directorios exhaustivos.

## JSON público

El build debe poder exponer una representación JSON del catálogo público, por ejemplo:

```text
/fuentes.json
```

Debe incluir sólo fuentes con `published: true` y los campos necesarios para consumo externo.

Esto permite reutilizar el catálogo desde la propia UI, herramientas futuras o AI hosts sin introducir una API o backend.

La implementación puede decidir si la búsqueda consume directamente este JSON o datos incluidos durante el build.

## Contenido e imágenes

Antes de publicar una fuente debe tener una redacción breve y verificable.

El contenido inicial debe priorizar:

- qué es;
- para qué sirve;
- para quién puede ser útil;
- limitaciones importantes.

La investigación debe partir de fuentes oficiales cuando sea posible.

Para identidad visual:

- preferir logos/assets oficiales cuando su uso sea apropiado;
- usar screenshots sólo cuando aporten información;
- evitar imágenes decorativas o tomadas de terceros sin una razón clara;
- registrar el origen del asset cuando sea necesario.

## Fuera de alcance

- backend;
- cuentas de usuario;
- favoritos;
- personalización por usuario;
- crawler automático;
- ranking algorítmico;
- comentarios;
- ratings;
- buscador global del sitio;
- perfiles individuales de usuario;
- páginas individuales por SourceType.

## Eje "sin perder el control"

La IA puede ayudar a descubrir fuentes y proponer candidatos, pero descubrir una fuente no equivale a recomendarla.

El catálogo conserva dos decisiones explícitas e independientes:

```text
status: candidate → reviewed
published: false → true
```

La persona mantiene el criterio editorial y puede revisar qué fuentes existen, por qué se recomiendan y cuándo fueron verificadas.

## Milestones

- [x] M1 — Probar el schema contra el inventario inicial de fuentes
- [x] M2 — Crear Content Collection inicial para Source
- [ ] M2b — Definir SourceType como contenido estructurado
- [ ] M3 — Cargar y validar el dataset inicial
- [x] M4 — Implementar `/fuentes/`, `/fuentes/tipos/` y páginas individuales
- [x] M5 — Agregar selección de fuentes y prompts personalizados
- [ ] M6 — Exponer el catálogo público como JSON
- [ ] M7 — Revisar copy, links, assets y metadata antes de publicar

## Preguntas abiertas

- ¿Qué campos del schema sobreviven después de probar 5–10 fuentes reales?
- ¿Qué taxonomía de SourceType describe mejor las fuentes reales sin crear categorías ambiguas?
- ¿Qué información necesita cada tipo de fuente para generar un buen prompt?
- ¿Qué bolsas y agregadores son suficientemente importantes para mantenerlos como catálogo?
- ¿Qué assets visuales podemos usar consistentemente entre fuentes?
- ¿Cuántas fuentes revisadas son suficientes para lanzar?
