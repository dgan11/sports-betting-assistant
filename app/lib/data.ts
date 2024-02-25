export async function getCoinPrice() {
  const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  return response.json();
}

/**
 * Uses https://the-odds-api.com/account/
 * @returns 
 */
export async function getOdds() {
  const sportKey = 'upcoming'; // The sport key or 'upcoming' for next 8 games across all sports
  const regions = 'us'; // The regions you're interested in
  const markets = 'h2h'; // The markets you want odds for
  const oddsFormat = 'decimal'; // The format of the odds
  const dateFormat = 'iso'; // Date Format

  const url = `https://api.the-odds-api.com/v4/sports/${sportKey}/odds?apiKey=${process.env.API_KEY}&regions=${regions}&markets=${markets}&oddsFormat=${oddsFormat}&dateFormat=${dateFormat}`;

  // Fetch with Cache - re-fetch every 5 minutes
  const response = await fetch(url, {next: { revalidate: 300}});

  if (!response.ok) {
    throw new Error('Failed to fetch odds');
  }

  return response.json();
}