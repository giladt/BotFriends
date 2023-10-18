import { ObjectId } from "mongodb";

export type DeveloperSchema = {
  _id: string | ObjectId
  firstName: string,
  lastName: string,
  jobDescription: string
  imageUrl: string
  createdAt: number
}

export type CreateDeveloperEntryDTO = {
  firstName: string
  lastName: string
  jobDescription: string
  imageUrl: string
}

