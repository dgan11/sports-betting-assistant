import Image from "next/image";
import { mockData } from "../public/placeholder-data";
import { getOdds } from "../lib/data";
import { FAQ } from "@/components/FAQ";
import { OddsTable } from "@/components/OddsTable";

export default async function Home() {
  // Uncomment the following line to fetch real data
  // const odds = await getOdds();

  // For now, use mock data
  const odds = mockData; // mock data

  return (
   <main className="min-h-screen p-6">
    <h1 className="p-6 text-xl">Home Page</h1>
    <OddsTable odds={odds} />
    <br />
    <div>
      <h1 className="text-2xl font-bold">FAQ</h1>
      <FAQ />
    </div>
   </main>
  );
}
