import Image from "next/image";
import { mockData } from "./public/placeholder-data";
import { getOdds } from "./lib/data";

export default async function Home() {
  // const odds = await getOdds();
  const odds = mockData; // mock data

  return (
   <main className="min-h-screen flex-col p-6">
    <h1>Home Page</h1>
    <div>
      <h1>Upcoming Odds</h1>
      <pre>{JSON.stringify(odds, null, 2)}</pre>
    </div>
   </main>
  );
}
