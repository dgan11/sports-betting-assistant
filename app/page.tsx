"use client";
import Image from "next/image";
import React, {useState, useEffect} from "react";
import { mockData } from "./public/placeholder-data";

async function getOdds() {
  const sportKey = 'upcoming'; // The sport key or 'upcoming' for next 8 games across all sports
  const regions = 'us'; // The regions you're interested in
  const markets = 'h2h'; // The markets you want odds for
  const oddsFormat = 'decimal'; // The format of the odds
  const dateFormat = 'iso'; // Date Format
  console.log('API_KEY :', process.env.NEXT_PUBLIC_API_KEY);

  const url = `https://api.the-odds-api.com/v4/sports/${sportKey}/odds?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&regions=${regions}&markets=${markets}&oddsFormat=${oddsFormat}&dateFormat=${dateFormat}`;
  console.log(url);
  // Fetch with Cache - re-fetch every 5 minutes
  const response = await fetch(url, {next: { revalidate: 300}});

  if (!response.ok) {
    throw new Error('Failed to fetch odds');
  }

  return response.json();
}

export default function Home() {

  const [odds, setOdds] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    // getOdds()
    //   .then((data) => setOdds(data))
    //   .catch((error) => setError(error));

    setOdds(mockData);
  }, []);

  return (
   <>
    <h1>Home Page</h1>
    {odds ? (
        <pre>{JSON.stringify(odds, null, 2)}</pre> // Example of rendering the data as preformatted text
      ) : (
        <p>Loading...</p>
      )}
   </>
  );
}
