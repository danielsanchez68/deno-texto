//https://dev.to/craigmorten/opine-tutorial-part-1-express-for-deno-5nb
import { opine, json, serveStatic  } from "./deps.ts";
import RouterPalabras from './router/palabras.ts'
import CnxMongo from './model/DB.ts'
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker/locale/es_MX';

const randomName = faker.person.fullName(); // Willie Bahringer
const randomEmail = faker.internet.email(); // Tomasa_Ferry14@hotmail.com
const palabras = faker.word.words({ count: 5 })

console.log(randomName)
console.log(randomEmail)
console.log(palabras)
console.log(faker.word.adjective())


const app = opine();
app.use(json());
app.use(serveStatic("public"));

/* ------------------------------------------------------------- */
/*             ZONA DE RUTAS MANEJADAS POR EL ROUTER             */
/* ------------------------------------------------------------- */
app.get('/',(_,res) => {
  res.send('Bienvenido al servidor MVC')
})

app.get('/ping',(_,res) => {
  res.send('PONG')
})

app.get('/verif',(req,res) => {
  const { num } = req.query
  const casos = 5
  const random = Number((Math.random() * casos).toFixed(0)) + 1
  let irregular  = (random % casos) == 0

  if(!num) irregular = true

  res.json({ num: num || '???', irregular })
})


let numSorteo = 0

app.get('/premios',(_,res) => {
  const casos = 10
  const random = Number((Math.random() * casos).toFixed(0)) + 1
  const premio  = (random % casos) == 0

  res.json({ sorteo: ++numSorteo, premio:premio })
})

//app.use('/palabras', new RouterPalabras().start())

app.get('/palabras',(req,res) => {
  console.log(req.params)
  console.log(req.query)
  const cantidad = Number(req.query.cantidad || 0)
  const palabras = faker.word.words({ count: cantidad }).split(' ')

  res.json({ cantidad, palabras })
})



/* ------------------------------------------------------------- */
/*                      Servidor LISTEN                          */
/* ------------------------------------------------------------- */
const PORT = 8080
await CnxMongo.conectar()
try {
  app.listen(PORT,  () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))
}
catch(error) {
  console.log('Servidor express en error:', error)
}
