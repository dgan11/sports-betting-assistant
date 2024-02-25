import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const odds = [
  {
    id: '05076e0ccc4957d2316861dd24a749f1',
    sport_key: 'cricket_psl',
    sport_tite: 'Pakistan Super League',
    commence_time: "2024-02-25T14:00:00Z",
    home_team: "Lahore Qalandars",
    away_team: "Peshawar Zalmi",
    bookmakers: [
      {
        key: "unibet_us",
        title: "Unibet",
        last_update: "2024-02-25T16:18:13Z",
        markets: [
          { 
            key: "h2h",
            last_update: "2024-02-25T16:18:13Z",
            outcomes: [
              {
                name: "Lahore Qalandars",
                price: 3.15
              },
              {
                name: "Peshawar Zalmi",
                price: 1.33
              }
            ]
          }
        ],
      },
      {
        key: "bovada",
        title: "Bovada",
        last_update: "2024-02-25T16:18:14Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-02-25T16:18:14Z",
            outcomes: [
              {
                name: "Lahore Qalandars",
                price: 3.3
              },
              {
                name: "Peshawar Zalmi",
                price: 1.31
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'dfb453040b92f475e39683b6a7f25f13',
    sport_key: 'soccer_germany_bundesliga',
    sport_tite: 'Bundesliga - Germany',
    commence_time: "2024-02-25T14:30:03Z",
    home_team: "Eintracht Frankfurt",
    away_team: "VfL Wolfsburg",
    bookmakers: [
      {
        key: "betmgm",
        title: "BetMGM",
        last_update: "2024-02-25T16:18:27Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-02-25T16:18:27Z",
            outcomes: [
              {
                name: "Eintracht Frankfurt",
                price: 29
              },
              {
                name: "VfL Wolfsburg",
                price: 1.2
              },
              {
                name: "Draw",
                price: 5
              }
            ]
          }
        ],
      },
      {
        key: "fan_duel",
        title: "FanDuel",
        last_update: "2024-02-25T16:17:09Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-02-25T16:17:09Z",
            outcomes: [
              {
                name: "Eintracht Frankfurt",
                price: 30
              },
              {
                name: "VfL Wolfsburg",
                price: 1.22
              },
              {
                name: "Draw",
                price: 4.7
              }
            ]
          }
        ],
      }
    ]
  }
]

export function OddsTableDemo() {
  return (
    <Table>
      <TableCaption>Upcoming Bets</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Sport</TableHead>
          <TableHead>League</TableHead>
          <TableHead>Start Time</TableHead>
          <TableHead>Odds</TableHead>
          {/* <TableHead className="text-right">Amount</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {odds.map((odd) => (
          <TableRow key={odd.id}>
            <TableCell className="font-medium">{odd.sport_key}</TableCell>
            <TableCell>{odd.sport_tite}</TableCell>
            <TableCell>{odd.commence_time}</TableCell>
            {/* <TableCell className="text-right">{invoice.totalAmount}</TableCell> */}
            <TableRow>
              {odd.bookmakers.map((bookmaker) => (
                <TableCell key={bookmaker.key}>
                  <h3>{bookmaker.title}</h3>
                  <Table>
                    {/* <TableHeader>
                      <TableRow>
                        <TableHead>Team</TableHead>
                        <TableHead>Price</TableHead>
                      </TableRow>
                    </TableHeader> */}
                    <TableBody>
                      {bookmaker.markets.map((market) => (
                        <TableRow key={market.key}>
                          {market.outcomes.map((outcome) => (
                            <TableCell key={outcome.name}>
                              <p>{outcome.name}</p>
                              <p>{outcome.price}</p>
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableCell>
              ))}
            </TableRow>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  )
}
