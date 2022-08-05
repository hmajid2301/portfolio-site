# gatsby-plugin-goatcounter-analytics-reporter

Queries page views data from goatcounter analytics. Heavily inspired by the `gatsby-plugin-google-analytics-reporter`.

## How to use

### Install

Install the package with `npm`.

```bash
# with npm
npm i gatsby-plugin-goatcounter-analytics-reporter

# or with yarn
yarn add gatsby-plugin-goatcounter-analytics-reporter
```

### Usage

To use the plugin add it to your `gatsby-config.js`, make sure you have set up the variables required.

```js
// gatsby-config.js
{
  resolve: `gatsby-plugin-goatcounter-analytics-reporter`,
  options: {
    code: process.env.GOATCOUNTER_CODE,
    personalToken: process.env.GOATCOUNTER_PERSONAL_TOKEN,
    daysAgo: `30`,
  }
},
```

| Prop          | Required |   Type | Description                                                                                  |
| ------------- | :------: | -----: | -------------------------------------------------------------------------------------------- |
| code          |   true   | string | The goatcounter code used to access your site analytics. i.e https://<code>.goatcounter.com/ |
| personalToken |   true   | string | The personal token from your goatcounter account, which will allow us to access the api.     |
| daysAgo       |  false   | string | The number of days ago to get data from like `30`. Defaults to `2020-01-01` .                |

Once implemented, you can check that the query work on `localhost:8000/__graphql`. Here is an example using `allPageViews`.

```js
// graphql
query MyQuery {
  allPageViews(sort: {order: DESC, fields: totalCount}) {
    nodes {
      id
      totalCount
    }
  }
}

// returns
{
  "data": {
    "allPageViews": {
      "nodes": [
        {
          "id": "/",
          "totalCount": 703
        },
        {
          "id": "/how-to-set-up-gatsby-typescript-eslint-prettier/",
          "totalCount": 126
        },
        {
          "id": "/react-hooks-vs-redux/",
          "totalCount": 121
        },
      ],
    },
  },
}
```

Here is an example using `pageViews`.

```js
// graphql
query MyQuery {
  pageViews(id: {eq: "/how-to-set-up-gatsby-typescript-eslint-prettier/"}) {
    id
    totalCount
  }
}

// returns
{
  "data": {
    "pageViews": {
      "id": "/how-to-set-up-gatsby-typescript-eslint-prettier/",
      "totalCount": 126
    }
  }
}
``
## Appendix

- Heavily inspired by [gatsby-plugin-google-analytics-reporter](https://github.com/Kornil/gatsby-plugin-google-analytics-reporter)
```
