# Página: Fuentes

## Objetivo

Ayudar a responder:

> **¿Dónde vale la pena buscar para mi caso?**

No debe ser una lista enorme de sitios.

La página combina una explicación de tipos de fuente con un dataset curado y buscable.

## Introducción

Explicar que una búsqueda sana mezcla distintas fuentes porque ninguna cubre todo el mercado.

Propuesta de cuatro grupos:

### 1. Bolsas de trabajo generales

Buenos puntos de partida y cobertura amplia.

Ejemplos iniciales a verificar antes de publicar:

- LinkedIn Jobs
- OCC
- Computrabajo
- Indeed

### 2. ATS y páginas directas

Útiles para encontrar vacantes publicadas directamente por empresas y descubrir oportunidades que no aparecen bien en agregadores.

Ejemplos:

- Greenhouse
- Lever
- Ashby
- Workday

La guía debe explicar que normalmente no se "navega un ATS" como un job board; sirve para buscar empresas/vacantes directas mediante web, buscadores o IA.

### 3. Remoto e internacional

Fuentes especializadas para oportunidades fuera del mercado local, filtrando explícitamente si aceptan personas desde México.

Candidatos iniciales:

- Remote.co
- FlexJobs
- Wellfound
- Real Work From Anywhere

### 4. Reclutadores, comunidades y empresas objetivo

Fuentes que dependen más del perfil.

Incluye:

- agencias/recruiters especializados;
- comunidades profesionales;
- career pages de empresas objetivo;
- listas personales de compañías a seguir.

Aquí la recomendación es construir una lista pequeña y relevante en vez de navegar cientos de compañías.

## Datos por fuente

Cada fuente debería tener como mínimo:

```yaml
name:
url:
type:
markets:
roles:
remote:
language:
cost:
account_required:
alerts:
notes:
status:
last_reviewed:
```

No todo necesita aparecer visualmente.

## UI

Desktop y mobile:

```text
Fuentes para buscar trabajo

[ Buscar una fuente... ]

[ General ] [ Directas ] [ Remoto ] [ Especializadas ]

LinkedIn
General · México / Global · Alertas
Bueno para...

OCC
General · México
Bueno para...
```

## Buscador

V1 puede ser filtrado en cliente sobre contenido estático.

No necesita backend ni base de datos.

Buscar por:

- nombre;
- tipo;
- mercado;
- rol/perfil;
- remoto;
- texto descriptivo.

El buscador global del sitio puede llegar después. La página de Fuentes es un buen primer lugar para validar si realmente aporta valor.

## Eje "sin perder el control"

Cerrar la página con una recomendación operativa:

- escoge pocas fuentes;
- configura alertas donde tengan sentido;
- revisa resultados en lotes;
- conserva tu lista de fuentes y criterios fuera de la memoria exclusiva del chatbot;
- cambia de fuente cuando los resultados demuestren que no aporta.

La IA puede buscar y proponer nuevas fuentes. La persona conserva la lista, los criterios y la decisión de qué seguir.
