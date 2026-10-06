# graphql-node-mongo

A minimal GraphQL API for books, with Apollo Server and MongoDB through Mongoose.

**Status: archived.** Learning exercise from 2019, last activity 2019-03-09. Not maintained.

## What it shows

- A schema with a `Book` type (`id`, `title`, `author`, `year`), a `getBooks` query and an `addBook` mutation: [`index.js`](index.js).
- A Mongoose model for the books: [`models.js`](models.js).
- The connection to a local MongoDB, `mongodb://localhost:27017/bookstore`, written in [`config.js`](config.js).

## Stack

From [`package.json`](package.json): `apollo-server` 2, `graphql` 14, Mongoose 5, Node.js.

## Run it

```bash
yarn install
node index.js
```

It needs a MongoDB listening on `localhost:27017`. These commands were not run when this README was written.

## Known issues

- Apollo Server 2 reached end of life on 2023-10-22.
- In `addBook`, a failure returns `e.message`, a string, where the schema declares a `Book`. GraphQL then reports an error instead of returning the message.
- The MongoDB URL is hard-coded in `config.js`.
- No tests: `npm test` prints an error by design.
- The dependencies are from 2019 and `yarn audit` reports a large number of advisories for them. Do not deploy this as is.

## License

No license file in the repository.
