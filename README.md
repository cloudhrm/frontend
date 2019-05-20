# frontend

CloudHRM frontend application
[![Known Vulnerabilities](https://snyk.io/test/github/cloudhrm/frontend/badge.svg)](https://snyk.io/test/github/cloudhrm/frontend)

## Project backend prepeare

To start backend you can use docker-compose.yml at root of the project. Just apply:

```bash
docker-compose up -d
```

This will start all required backends.
But still after starting, some config of gateway is needed.
TODO: this should be done while starting docker.

```bash
## Create user
docker exec frontend_gw_1 treeGatewayConfig users add -l admin -p admin -n admin -r admin config
## Login to admin API to get token
curl -X POST "http://localhost:8001/users/authentication" -H "accept: text/html" -H "Content-Type: application/x-www-form-urlencoded" -d "login=admin&password=admin"
## Check your auth works by getting apis
curl -X GET "http://localhost:8001/apis" -H "accept: application/json" -H "Authorization: Bearer <__copy_token_here__>"
```

Right after admin section, you have to add serviceDiscovery for consul:

```bash
docker exec -it frontend_gw_1 /bin/sh
# inside docker
treeGatewayConfig gateway -get >gw.yaml
vi gw.yaml
```

Then in editor add discovery section (right after admin)

```yaml
serviceDiscovery:
    provider:
        - name: consul
          options:
                host: consul
                port: 8500
```

And update gateway with new config:

```bash
treeGatewayConfig gateway -u ./gw.yaml
```

After we can add first proxy. Create file - auth_api.yaml

```yaml
name: TestServiceDiscoveryConsulAPI
version: 1.0.0
path: /auth
proxy:
    target:
        router:
            serviceDiscovery:
                name: consul
                options:
                    serviceName: auth
    timeout: 5000
```

And apply that config:

```bash
treeGatewayConfig apis -a ./auth_api.yaml
```

## Project development setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

### Run your end-to-end tests

```
yarn run test:e2e
```

### Run your unit tests

```
yarn run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
