import fastify from 'fastify'

const app = fastify()

app.get('/ola', () => {
    return 'Olá Dev\'s'
})

app.listen({ port: 3333 }).then(() => {
    console.log('Servidor em execução!!!')
})