import { NextFunction, Request, Response } from "express";
import { connectToDatabase, collections } from "../services/database.service"
import { DeveloperSchema } from "../types/developer";


export async function devRead(req: Request, res: Response, next: NextFunction) {

  if (!(collections.developers))
    await connectToDatabase();

  if (!collections.developers)
    return res.send({ data: { error: "No Developers Found" } }).status(422);

  const results = await collections.developers.find<DeveloperSchema>({}).toArray();
  if (!results)
    return res.send("Not found").status(404)
  else
    return res.status(200).send({ data: results });
}