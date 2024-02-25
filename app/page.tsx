import Image from "next/image";
import { mockData } from "../public/placeholder-data";
import { getOdds } from "../lib/data";
import { Button } from "@/components/ui/button"
import { FAQ } from "@/components/FAQ";
import OddsTable from "@/components/OddsTable";
import { TableDemo } from "@/components/TableDemo";
import { OddsTableDemo } from "@/components/OddsTableDemo";

export default async function Home() {
  // const odds = await getOdds();
  const odds = mockData; // mock data

  return (
   <main className="min-h-screen p-6">
    <h1 className="p-6 text-xl">Home Page</h1>
    {/* <OddsTable odds={odds} /> */}
    {/* <pre>{JSON.stringify(odds, null, 2)}</pre> */}
    <OddsTableDemo />
    <br />
    {/* <TableDemo /> */}
    <div>
      <h1 className="text-2xl font-bold">FAQ</h1>
      <FAQ />
    </div>
   </main>
  );
}
