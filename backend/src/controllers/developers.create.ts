import { NextFunction, Request, Response } from "express";
import { connectToDatabase, collections } from "../services/database.service"
import { DeveloperSchema, CreateDeveloperEntryDTO } from "../types/developer";

export async function devCreate(req: Request, res: Response, next: NextFunction) {
  const { firstName, lastName, jobDescription, imageUrl }: CreateDeveloperEntryDTO = req.body
  if (!firstName || !lastName || !jobDescription || !imageUrl)
    res
      .status(405)
      .send({ Error: "Invalid request." })

  const newDeveloper: CreateDeveloperEntryDTO = {
    firstName,
    lastName,
    jobDescription,
    imageUrl,
  }

  if (!collections) await connectToDatabase();
  if (!collections.developers) return res.send("Internal Error").status(500);

  const _id = await collections.developers.insertOne({
    ...newDeveloper,
    createdAt: new Date().getTime()
  });

  if (_id) {
    res.send({
      data: {
        message: "a new record have been added to DB",
        record: {
          _id,
          firstName,
          lastName,
          jobDescription,
          imageUrl
        },
      },
    })
  }
}