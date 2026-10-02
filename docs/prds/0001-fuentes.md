```
status: draft
```

# PRD 0001 — Fuentes

## Problema

Buscar trabajo suele convertirse en revisar demasiados sitios sin saber cuáles realmente aportan para un perfil, mercado o modalidad.

La página debe ayudar a responder:

> **¿Dónde vale la pena buscar para mi caso?**

No debe convertirse en una lista infinita de sitios.

## Resultado esperado

Una página pública en español que:

- explique los principales tipos de fuentes;
- muestre una lista curada y estructurada;
- permita encontrar rápidamente fuentes relevantes;
- deje claro qué puede delegarse a la IA y qué conviene controlar personalmente.

## Alcance

### Cuatro grupos

1. **Bolsas generales**
2. **ATS y páginas directas**
3. **Remoto e internacional**
4. **Reclutadores, comunidades y empresas objetivo**

### Datos por fuente

Como mínimo:

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

No todos los campos necesitan mostrarse visualmente.

### Búsqueda y filtros

V1 puede filtrar completamente en cliente sobre datos estáticos.

Debe poder encontrar por:

- nombre;
- tipo;
- mercado;
- rol/perfil;
- remoto;
- texto descriptivo.

## Fuera de alcance

- backend;
- cuentas de usuario;
- guardar favoritos;
- recomendaciones personalizadas;
- crawler automático;
- ranking algorítmico;
- buscador global del sitio.

## Experiencia / contenido

### Introducción

Explicar que una búsqueda sana mezcla distintos tipos de fuentes porque ninguna cubre todo el mercado.

### 1. Bolsas generales

Cobertura amplia y buen punto de partida.

Candidatos iniciales a verificar:

- LinkedIn Jobs
- OCC
- Computrabajo
- Indeed

### 2. ATS y páginas directas

Vacantes publicadas directamente por empresas, incluyendo oportunidades que pueden aparecer mal o tarde en agregadores.

Candidatos:

- Greenhouse
- Lever
- Ashby
- Workday

Debe explicarse que normalmente un ATS no se navega como un job board: se descubre mediante empresas, buscadores o IA.

### 3. Remoto e internacional

Fuentes especializadas en oportunidades fuera del mercado local.

La página debe enfatizar que "remoto" no significa automáticamente "contratable desde México".

Candidatos iniciales:

- Remote.co
- FlexJobs
- Wellfound
- Real Work From Anywhere

### 4. Reclutadores, comunidades y empresas objetivo

Fuentes que dependen más del perfil:

- agencias/recruiters especializados;
- comunidades profesionales;
- career pages;
- lista personal de compañías objetivo.

La recomendación es construir una lista pequeña y relevante.

## Eje "sin perder el control"

La página debe terminar con una recomendación operativa:

- elegir pocas fuentes;
- configurar alertas donde aporten;
- revisar resultados en lotes;
- conservar la lista de fuentes y criterios fuera de una conversación específica;
- dejar de usar fuentes que repetidamente no aportan.

La IA puede buscar y proponer fuentes. La persona conserva la lista, los criterios y la decisión de cuáles seguir.

## Milestones

- [ ] M1 — Verificar y definir el dataset inicial
- [ ] M2 — Implementar página estática con los cuatro grupos
- [ ] M3 — Agregar búsqueda y filtros en cliente
- [ ] M4 — Revisar copy, links y metadata antes de publicar

## Preguntas abiertas

- ¿Qué filtros aportan realmente en V1 además de tipo, mercado y remoto?
- ¿Conviene mostrar costo/cuenta/alertas como filtros o sólo como metadata?
- ¿Cuántas fuentes son suficientes para lanzar sin convertirlo en directorio?
