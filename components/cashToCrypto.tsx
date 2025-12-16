import CustomButton from "./customButton";

export default function CashToCrypto() {
  return (
    <section className="flex flex-col items-center justify-star container max-w-130 min-h-[77vh] mx-auto px-4 md:px-0">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl text-[#013941] text-center mt-14 font-clash">
          Coming Soon!
        </h1>
        <p className="text-[#4F4F4F] text-xl text-center font-outfit tracking-normal">
          Crypto to Fiat Loan is almost here. <br /> Enter your email and we’ll let you
          know the moment it’s live.
        </p>
      </div>

      <div className="flex flex-col w-full mt-6 space-y-4">
        <label htmlFor="email" className="text-base font-medium text-[#013941] font-outfit">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="w-full rounded-[30px] border border-[#E0E0E0] px-8 py-4 focus:outline-none  font-outfit"
        />
      </div>

      <div className="mt-20 w-full">
        <CustomButton subject="Update" />
      </div>
    </section>
  );
}
