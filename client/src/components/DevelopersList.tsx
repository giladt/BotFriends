import type { FC, ReactNode } from "react";

interface DevelopersListProps {
  children: ReactNode;
}

const DevelopersList: FC<DevelopersListProps> = ({ children }) => {
  return (
    <ul
      className="flex flex-row gap-4 container
      w-full p-4
      h-[calc(100vh-2.5rem)] list-none justify-center"
    >
      {children}
    </ul>
  );
};
export default DevelopersList;
