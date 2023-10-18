import type { FC } from "react";

type Developer = {
  _id: string;
  firstName: string;
  lastName: string;
  jobDescription: string;
  imageUrl: string;
  createdAt: number;
};

type DeveloperCardProps = Developer;

const DeveloperCard: FC<DeveloperCardProps> = ({ ...args }) => {
  const fullName = args.firstName + " " + args.lastName;

  return (
    <li className="rounded-lg bg-red-400 items-center justify-center h-max w-max">
      <img src={args.imageUrl} alt={fullName} className="rounded-t-lg" />
      <h1 className="text-2xl font-bold p-4 text-center">{fullName}</h1>
      <div className="px-4 py-2 text-center">{args.jobDescription}</div>
    </li>
  );
};
export default DeveloperCard;
