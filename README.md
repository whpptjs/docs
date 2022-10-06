## Getting Started

Duplicate the api/.env.example file to api/.env and replace the S3 secret access key.

```bash
cp server/.env.example api/.env
```

```
S3_SECRET_ACCESS_KEY=<Your Key Here>
```

To get run the site in development you will need to be running 3 terminals.

In the first, run the databse cluster:

```bash
yarn db:mongo
```

In the second, run the api server:

```bash
yarn api
```

In the third, run the website:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Whppt, take a look at the following resources:

- [Whppt Documentation](https://www.whppt.org/docs)
- [Learn Whppt](https://www.whppt.org)
