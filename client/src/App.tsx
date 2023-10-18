import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import DevelopersList from "./components/DevelopersList";
import DeveloperCard from "./components/DeveloperCard";

type Developer = {
  _id: string;
  firstName: string;
  lastName: string;
  jobDescription: string;
  imageUrl: string;
  createdAt: number;
};

function App() {
  const [developers, setDevelopers] = useState<Array<Developer>>();

  async function getDevelopers(): Promise<void> {
    const options = {
      method: "GET",
    };

    const data = await (
      await fetch("http://localhost:5000/api/developers", options)
    ).json();
    setDevelopers(data.data);
  }

  useEffect(() => {
    getDevelopers();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex bg-red-200 dark:bg-red-800 justify-center">
        {developers && (
          <DevelopersList>
            {developers.map((d) => (
              <DeveloperCard key={d._id} {...d} />
            ))}
          </DevelopersList>
        )}
      </div>
    </>
  );
}

export default App;
