import { createServer } from './server'

(async () => {
    const server = await createServer()
    server.listen(8080 , () => {console.log("server started")})
})();