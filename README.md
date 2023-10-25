# New York Times Top Stories

MERN program that uses react to show Top Stories as cards after retrieving them from the New York Times API.

### Env Variables

Rename the `.env-example` file to `.env` and add the following

```
NODE_ENV=development
PORT=5000
API_KEY=THE NEW YORK TIMES API KEY
```

You can find API docs here and generate API KEY using it.
- https://developer.nytimes.com/
- https://developer.nytimes.com/docs/top-stories-product/1/overview

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server

# Run frontend only
npm run client
```