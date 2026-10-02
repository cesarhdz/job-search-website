# Recursos

Los recursos externos curados viven aquí como YAML o JSON.

El sitio está en español y empieza enfocado en México. Un recurso puede estar en inglés o ser global si aporta suficiente valor para esa audiencia.

Ejemplo:

```yaml
title: Recurso de ejemplo
url: https://example.com
type: article
stage: find-opportunities
summary: Por qué vale la pena este recurso.
bestFor:
  - Product managers buscando trabajo remoto desde México
source: Example publisher
language: es
markets:
  - MX
commercialRelationship: none
status: candidate
```

`markets` usa códigos de país cuando aplica. Puede incluir `global` para recursos sin dependencia de mercado.

Un recurso pasa a `reviewed` sólo después de revisión editorial.
