# PRDs

Cada sección o capacidad relevante del sitio se trabaja como un pequeño producto.

El PRD define el problema y el resultado esperado. El roadmap sólo enlaza al PRD y muestra su estado.

## Cuándo crear un PRD

Crear uno cuando el cambio introduce:

- una nueva sección;
- un nuevo tipo de contenido;
- una interacción relevante, como búsqueda o filtros;
- una nueva contribución/workflow editorial;
- una capacidad que necesita varias decisiones antes de implementarse.

Correcciones pequeñas de copy o contenido no necesitan PRD.

## Estructura

```md
# PRD NNNN — Nombre

Status: draft | accepted | building | shipped

## Problema

## Resultado esperado

## Alcance

## Fuera de alcance

## Experiencia / contenido

## Decisiones

## Milestones

- [ ] M1
- [ ] M2
- [ ] M3

## Preguntas abiertas
```

## Trabajo incremental

Los cambios deben ser pequeños, aditivos y revisables.

Un PRD puede mezclarse solo como propuesta. Cuando el trabajo crece, separar:

1. PRD;
2. diseño/spec cuando haga falta;
3. implementación/contenido.

Para cambios pequeños, PRD + implementación pueden vivir en un mismo PR si siguen siendo fáciles de revisar.
