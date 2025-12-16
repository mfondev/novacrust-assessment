import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CryptoToCash from "./cryptoToCash";
import CashToCrypto from "./cashToCrypto";

export default function TabsHeader() {
  return (
    <div className="w-full ">
      <Tabs defaultValue="cryptoToCash" className="w-full">
        <TabsList className="mx-auto flex justify-center">
          <TabsTrigger value="cryptoToCash">Crypto to cash</TabsTrigger>
          <TabsTrigger value="cashToCrypto">Cash to crypto</TabsTrigger>
          <TabsTrigger value="cryptoToFiatLoan">
            Crypto to fiat loan
          </TabsTrigger>
        </TabsList>
        <TabsContent value="cryptoToCash">
          <CryptoToCash />
        </TabsContent>
        <TabsContent value="cashToCrypto">
          <CashToCrypto />
        </TabsContent>
      </Tabs>
    </div>
  );
}
