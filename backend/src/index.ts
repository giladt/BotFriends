import ExpressConfig from "./express.config"

import type { Request, Response } from "express";

import apiRoutes from "./routes/api";

const app = ExpressConfig();
const port = 5000; // default port to listen

// define a route handler for the default home page
app.get("/", (req: Request, res: Response) => {
  res.send("Hello Bot Friends!");
});

app.use("/api", apiRoutes)

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
