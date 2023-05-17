import fastify from 'fastify';

const app = fastify();

// HTTP Method: GET, POST, PUT, PATCH, DELETE

app.post('/hello', () => {
  return 'Hello world!';
})

// API RESTful

app.listen({
  port: 3333,
}).then(() => {
  console.log('🚀 listening on port 3333');
})