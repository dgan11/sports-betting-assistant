import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function OddsTable({ odds }: any) {
  return (
    <Table>
      <TableCaption>Upcoming Odds</TableCaption>
      <TableHead>
        <TableRow>
          <TableHeader>Sport</TableHeader>
          <TableHeader>Teams</TableHeader>
          <TableHeader>Time</TableHeader>
          <TableHeader>Best Odds</TableHeader>
          <TableHeader>Odds</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {odds.map((odd: any) => (
          <TableRow key={odd.id}>
            <TableCell>{odd.sport_key}</TableCell>
            <TableCell>{odd.home_team}</TableCell>
            <TableCell>{new Date(odd.commence_time).toLocaleDateString()}</TableCell>
            <TableCell>{123}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}