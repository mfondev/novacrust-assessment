"use client";

import { useState } from "react";
import { CustomSelect, SelectOption } from "./customSelect";
import CustomButton from "./customButton";

export default function CryptoToCash() {
  const [crypto, setCrypto] = useState("ETH");
  const [currency, setCurrency] = useState("NGN");
  const [walletFrom, setWalletFrom] = useState("");
  const [walletTo, setWalletTo] = useState("");

  const cryptoOptions: SelectOption[] = [
    { label: "ETH", value: "ETH", icon: "/assets/icons/eth.png" },
    { label: "USDT - CELO", value: "CELO", icon: "/assets/icons/celo.png" },
    { label: "USDT - TON", value: "TON", icon: "/assets/icons/ton.png" },
    { label: "USDT - BNB", value: "BNB", icon: "/assets/icons/bnb.png" },
  ];

  const currencyOptions: SelectOption[] = [
    { label: "NGN", value: "NGN", icon: "/assets/icons/ngn.png" },
    { label: "USD", value: "USD", icon: "/assets/icons/usd.png" },
    { label: "GBP", value: "GBP", icon: "/assets/icons/gbp.png" },
  ];

  const walletOptions: SelectOption[] = [
    { label: "Metamask", value: "metamask", icon: "/assets/icons/metamask.png" },
    { label: "Rainbow", value: "rainbow", icon: "/assets/icons/rainbow.png" },
    { label: "WalletConnect", value: "walletconnect", icon: "/assets/icons/walletconnect.png" },
    {
      label: "Other Crypto wallets,(Binance,Conibase,Bybit etc)",
      value: "others",
      icon: "/assets/icons/others.png",
    },
  ];

  const isFormValid =
    Boolean(crypto) &&
    Boolean(currency) &&
    Boolean(walletFrom) &&
    Boolean(walletTo);

  return (
    <section className="space-y-4 sm:space-y-6 mt-3 sm:mt-5 container mx-auto max-w-lg px-4 md:px-0">

      <div className="flex items-end justify-between border border-[#E0E0E0] rounded-[30px] p-6">
        <div>
          <p className="text-sm sm:text-base font-medium text-[#828282] mb-2 font-outfit">
            You pay
          </p>
          <h2 className="text-xl sm:text-2xl text-[#000E10] font-semibold font-outfit">
            1.00
          </h2>
        </div>
        <CustomSelect
          options={cryptoOptions}
          value={crypto}
          onChange={setCrypto}
          showSearch
          highlightSelected
        />
      </div>

      <div className="flex items-end justify-between border border-[#E0E0E0] rounded-[30px] p-6">
        <div>
          <p className="text-sm sm:text-base font-medium text-[#828282] mb-2 font-outfit">
            You receive
          </p>
          <h2 className="text-xl sm:text-2xl text-[#000E10] font-semibold font-outfit">
            1.00
          </h2>
        </div>
        <CustomSelect
          options={currencyOptions}
          value={currency}
          onChange={setCurrency}
          showSearch
          highlightSelected
        />
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-[#013941] text-base font-medium font-outfit">
          Pay from
        </h1>
        <CustomSelect
          options={walletOptions}
          value={walletFrom}
          onChange={setWalletFrom}
          fullWidth
          dropdownOffset={-5}
        />
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-[#013941] text-base font-medium font-outfit">
          Pay to
        </h1>
        <CustomSelect
          options={walletOptions}
          value={walletTo}
          onChange={setWalletTo}
          fullWidth
          dropdownOffset={-2}
        />
      </div>

      {!isFormValid && (
        <p className="text-sm text-[#EB5757] text-center font-outfit">
          Select all fields to continue
        </p>
      )}

      <CustomButton
        subject="Continue"
        disabled={!isFormValid}
      />
    </section>
  );
}
