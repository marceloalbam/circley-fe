# Turborepo Circley-fe

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps a

- `circley`: a [Next.js](https://nextjs.org) app
- `highhorse`: a [Next.js](https://nextjs.org) app
- `reinsman`: a [Next.js](https://nextjs.org) app
- `tucker`: a [Next.js](https://nextjs.org) app

### Packages

- `ui`: a stub agnostic React component library shared by applications
- `shared`: a stub React component library shared by `circle-y`, `highhorse`, `reinsman` and `tucker` applications
- `prismic`: a stub React component library which uses Prismic shared by `circle-y`, `highhorse`, `reinsman` and `tucker` applications
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Environments

#### Circley:

- `Wpro Staging`: https://circley-fe.wpro.app/
- `Client Staging`: https://circley-fe.vercel.app/
- `Localhost`: http://localhost:3000/

#### High horse:

- `Wpro Staging`: https://highhorse-fe.wpro.app/
- `Client Staging`: https://highhorse-fe.vercel.app/
- `Localhost`: http://localhost:3002/

#### Reinsman:

- `Wpro Staging`: https://reinsman-fe.wpro.app/
- `Client Staging`: https://reinsman-fe.vercel.app/
- `Localhost`: http://localhost:3003/

#### Tucker:

- `Wpro Staging`: https://tucker-fe.wpro.app/
- `Client Staging`: https://tucker-fe.vercel.app/
- `Localhost`: http://localhost:3001/

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
yarn build
```

### Develop

To develop all apps and packages, run the following command:

```
yarn dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
