import { Server } from "http"
import app from "./app"
import config from "./app/config"
const port = 8000
function main() {
   const server : Server = app.listen(port, () => console.log("Server is running", config.port))
}
main()

