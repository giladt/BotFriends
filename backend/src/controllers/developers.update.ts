import { ObjectId } from "mongodb";
import { NextFunction, Request, Response } from "express";
import { connectToDatabase, collections } from "../services/database.service"
import { DeveloperSchema } from "../types/developer";

export async function devUpdate(req: Request, res: Response, next: NextFunction) {
  const id: string = req.params.id;

  if (!(collections.developers)) await connectToDatabase();
  if (!collections.developers)
    return res.send({ data: { error: "No Developers Found" } }).status(422);

  const prevDoc = await collections.developers.findOne<DeveloperSchema>({ _id: new ObjectId(id) });
  if (!prevDoc) return res.status(404).send("Error: Document not found");

  const alteredDeveloper: DeveloperSchema = {
    ...prevDoc,
    ...req.body
  }

  if (!collections.developers) return res.send("Internal Error").status(500);

  const result = await collections.developers.updateOne({ _id: new ObjectId(id) }, { "$set": alteredDeveloper });

  res.send({
    data: {
      prev: prevDoc,
      new: alteredDeveloper
    },
    result
  })
}