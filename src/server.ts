import { Server } from "http"
import app from "./app"
const port = 8000
function main() {
   const server : Server = app.listen(port, () => console.log("Server is running", port))
}
main()

