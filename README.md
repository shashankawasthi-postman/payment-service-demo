# Payment Service (Demo)

Demo microservice for processing payments.

This is a **demo repo**: dummy, in-memory data and no authentication. It exists to
demonstrate an API spec paired with a minimal running implementation (e.g. for
Postman collection generation, mock servers, or API design walkthroughs).

## Contents

- [`openapi.yaml`](./openapi.yaml) — OpenAPI 3.0 spec describing the `payments` API.
- [`server.js`](./server.js) — Minimal Express server implementing the spec with in-memory dummy data.
- [`package.json`](./package.json) — Dependencies (just Express).

## Run it

```bash
npm install
npm start
```

The server starts on `http://localhost:4004`.

## Endpoints

| Method | Path | Description |
| --- | --- | --- |
| GET | `/health` | Health check |
| GET | `/payments` | List all payments |
| POST | `/payments` | Create a payment |
| GET | `/payments/:id` | Get a payment by ID |
| PUT | `/payments/:id` | Update a payment |
| DELETE | `/payments/:id` | Delete a payment |

## Import into Postman

Import [`openapi.yaml`](./openapi.yaml) directly into Postman (File → Import) to generate
a collection, or point Postman's mock server / API Builder at this spec.
