const fastify = require('fastify')({ logger: true })

fastify.route({
    method: 'GET',
    url: '/',
    schema: {
        // request needs to have a querystring with a `name` parameter
        querystring: {
            name: { type: 'string' }
        },
        // the response needs to be an object with an `hello` property of type 'string'
        response: {
            200: {
                type: 'object',
                properties: {
                    hello: { type: 'string' }
                }
            }
        }
    },
    // this function is executed for every request before the handler is executed
    preHandler: async (request, reply) => {
        // E.g. check authentication
    },
    handler: async (request, reply) => {
        return { hello: 'Docker container world' }
    }
})

const start = async () => {
    try {
        await fastify.listen({ port: 3000, host: '0.0.0.0' })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()