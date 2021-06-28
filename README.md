# snyk-insights

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

The theme is coming from:
https://www.creative-tim.com/product/vue-light-bootstrap-dashboard

You will need ot create a `.env.local` and have the following properties defined

```
VUE_APP_ENDPOINT=api
VUE_APP_SNYK_TOKEN=<YOUR TOKEN>
VUE_APP_ORG=<YOUR TOKEN>
```


Some of the icons are coming from https://devicon.dev/
Not using the NPM package as it is 2 years old and newer icons are needed.


## Docker

You can also run the app via Docker. In this case, you don't need an `.env.local` but pass the parameters in the `docker run` command dynamically.

Building the image

```
docker build -t snyk-insights .
```

Running the image

```
docker run --env VUE_APP_SNYK_TOKEN=****** --env VUE_APP_ORG=****** --env VUE_APP_ENDPOINT=api --name snyk-insights -p 8080:8080 snyk-insights
```
