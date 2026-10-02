# Website architecture

## Purpose

The website is the public entry point for the project.

It has two responsibilities:

1. explain the toolkit and how to use it;
2. maintain a curated knowledge base for the job-search journey.

It is intentionally separate from the private workspace application and hosted platform.

## Stack

- Astro + TypeScript
- static output
- Astro content collections for typed editorial content
- plain CSS initially
- GitHub Pages for hosting
- GitHub pull requests for editorial contributions

No database, CMS, server runtime, authentication, or analytics are required for V1.

## Content model

### Stages

Stable sections of the job-search journey. These define site information architecture.

### Resources

External articles, videos, tools, services, and communities that have been reviewed for a specific stage.

Resources have explicit editorial status and commercial-relationship metadata.

### Product guides

Product-specific instructions can be added later for tasks such as connecting an AI host, importing a workspace, or using the tracking tools.

## Publishing model

```text
contributor
    |
    v
pull request
    |
    v
schema validation + build
    |
    v
editorial review
    |
    v
main
    |
    v
GitHub Pages
```

For now, the repository owner is the required code/content owner.

## Future, only when needed

- custom domain
- search
- RSS
- link-health automation
- lightweight privacy-preserving analytics
- community contribution forms that create pull requests
- multilingual content

These should not block the first public version.
