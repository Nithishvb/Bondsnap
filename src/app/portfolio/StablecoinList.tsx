import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const stableCoins = [
  {
    name: "StableToken",
    symbool: "ST",
    icon: "",
    fiatCurrency: "USD",
  }
];

export default function StablecoinList() {
  return (
    <div className="w-[60%] mt-10">
      <Table>
        <TableCaption>A list of your recent stablecoins.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Symbool</TableHead>
            <TableHead>Icon</TableHead>
            <TableHead className="text-right">Fiat currency</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stableCoins.map((coins, index: number) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{coins.name}</TableCell>
              <TableCell>{coins.symbool}</TableCell>
              <TableCell>{coins.icon}</TableCell>
              <TableCell className="text-right">
                {coins.fiatCurrency}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
