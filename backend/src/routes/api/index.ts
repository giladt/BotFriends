import express from "express";
import { devCreate } from "../../controllers/developers.create";
import { devRead } from "../../controllers/developers.read";
import { devUpdate } from "../../controllers/developers.update";
import { devDelete } from "../../controllers/developers.delete";
import cors from "cors";
const apiRouter = express.Router();

apiRouter.use(cors({
  origin: "http://localhost:5173"
}))

apiRouter.use(express.json())
// 1.1 Create
apiRouter.post('/developers/add', devCreate)
// 1.2 Read
apiRouter.get('/developers', devRead)
// 1.3 Update
apiRouter.put('/developers/:id', devUpdate)
// 1.4 Delete
apiRouter.delete('/developers/:id', devDelete)

export default apiRouter;