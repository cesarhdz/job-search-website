# PRDs

Un PRD convierte una idea del roadmap en trabajo suficientemente definido para diseñar o implementar.

El roadmap puede contener ideas simples durante mucho tiempo. **No todo lo que aparece en el roadmap necesita un PRD.**

## Cuándo crear un PRD

Crear uno cuando ya queremos avanzar sobre una idea y necesitamos acordar alguna de estas cosas:

- el problema concreto;
- el resultado esperado;
- el alcance y lo que queda fuera;
- una nueva sección o tipo de contenido;
- una interacción relevante, como búsqueda o filtros;
- varias decisiones antes de implementar;
- milestones que conviene revisar por separado.

Una idea todavía exploratoria puede seguir siendo una o dos líneas en el roadmap.

Correcciones pequeñas de copy o contenido tampoco necesitan PRD.

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

No todas las secciones tienen que ser extensas. El PRD debe ser tan pequeño como permita tomar las decisiones necesarias.

## Trabajo incremental

Los cambios deben ser pequeños, aditivos y revisables.

Un flujo grande puede separar:

1. PRD;
2. diseño/spec cuando haga falta;
3. implementación/contenido.

Para cambios pequeños, PRD + implementación pueden vivir en un mismo PR si siguen siendo fáciles de revisar.
