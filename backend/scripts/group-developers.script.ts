type CreateDeveloperEntryDTO = {
  firstName: string
  lastName: string
  jobDescription: string
  imageUrl: string
}

type Attributes = keyof CreateDeveloperEntryDTO;

async function groupBy(attr: Attributes) {
  const allDevelopers: { data: CreateDeveloperEntryDTO[] } = await (await fetch("http://localhost:5000/api/developers")).json();

  console.log()
  const grouped: { [a: string]: any[] } = allDevelopers.data.reduce((
    prev: any,
    curr: any,
  ): any => {
    (prev[curr[attr]] = prev[curr[attr]] || []).push(curr)
    return prev;
  }, {})

  console.log(grouped)
}

groupBy(process.argv[2] as Attributes);