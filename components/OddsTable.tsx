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

export function OddsTable({ odds }: any) {
  return (
    <Table className="">
      <TableHeader>
        <TableRow>
          <TableHead className="">Sport</TableHead>
          <TableHead className="">League</TableHead>
          <TableHead className="">Start Time</TableHead>
          <TableHead className="">Bookmaker</TableHead>
          {/* <TableHead>Last Update</TableHead> */}
          <TableHead className="">Odds</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {odds.map((odd: any) => (
          <>
            <TableRow key={odd.id}>
              <TableCell className="font-medium" rowSpan={odd.bookmakers.length + 1}>
                {odd.sport_key}
              </TableCell>
              <TableCell rowSpan={odd.bookmakers.length + 1}>{odd.sport_title}</TableCell>
              <TableCell rowSpan={odd.bookmakers.length + 1}>{odd.commence_time}</TableCell>
            </TableRow>
            {odd.bookmakers.map((bookmaker: any) => (
              <TableRow key={bookmaker.key}>
                <TableCell>{bookmaker.title}</TableCell>
                {/* <TableCell>{bookmaker.last_update}</TableCell> */}
                <TableCell>
                  {bookmaker.markets.map((market: any) => (
                    market.outcomes.map((outcome: any) => (
                      <p key={outcome.name} className="p-0.5">
                        <span>{outcome.name} : </span>
                        <span className="bg-green-200 rounded-lg justify-center p-1">{outcome.price}</span>
                        {/* {outcome.name}: {outcome.price} */}
                        <br />
                      </p>
                    ))
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </>
        ))}
      </TableBody>
    </Table>
  );
}
