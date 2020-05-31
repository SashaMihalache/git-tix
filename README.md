# git-tix

Stubhub clone /w following tech stack

- Nextjs
- Node/Express
- Mongo
- Microservices architecture
- Docker
- Kubernetes
- Ingress
- Skaffold
- Redis
- NATS streaming server
- Typescript
- Testing
- npm custom modules

#### Creating a kubectl secret for a JWT secret

`k create secret jwt-secret --from-literal=jwt=asdf`


#### dev mode
`skaffold dev`

you also need [@git-tix/common](https://www.npmjs.com/package/@git-tix/common)

#### react app
start it on https://git-tix.com (after you added in /etc/hosts `127.0.0.1 git-tix.com`
