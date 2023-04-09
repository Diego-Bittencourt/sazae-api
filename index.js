const express = require("express")
const app = express()

app.get("/", (request, response) => {
    response.send("Hello from the server");
})

app.listen(3000, () => {
    console.log("Listen to the port 300...")
});