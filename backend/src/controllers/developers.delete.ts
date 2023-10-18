import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongodb";
import { connectToDatabase, collections } from "../services/database.service"

export async function devDelete(req: Request, res: Response, next: NextFunction) {
  const id: string = req.params.id;

  if (!(collections.developers)) await connectToDatabase();
  if (!collections.developers) return res.send({ data: { error: "No Developers Found" } }).status(422);

  const result = await collections.developers.deleteOne({ _id: new ObjectId(id) });

  if (result.deletedCount)
    res
      .status(200)
      .send({ error: encodeURI(`Developer with id ${id} have been successfully removed.`) })
  else
    res
      .status(404)
      .send({ error: encodeURI(`Could not remove a developer with the id ${id} or id not found.`) })
}
