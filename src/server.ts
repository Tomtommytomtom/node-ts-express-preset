import express from "express"
import cors from "cors"


const initHttpServer = ( httpPort: number ) => {
  const app = express();
  app.use(cors());

  app.get('/',(_,res) => {
      res.send("Hello World!")
  })

  app.listen(httpPort,() => {
    console.log("Started listening on port: " + httpPort);
  })
}

initHttpServer(8000)
