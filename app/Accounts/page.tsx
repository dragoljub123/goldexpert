import PaketCard from "../components/PaketCard";

export default function About() {
  return (
    <div>
      <div className=" flex flex-col text-center justify-center  py-20 ">
        <h1 className="text-5xl primarna font-bold mb-4">
          Accounts
          <span className="narandzasta">
            Accounts For Every Trader <br></br>
          </span>
        </h1>
        <p className="text-black mb-4">
          Unlock your trading potential with our diverse range of accounts.
          Choose from Basic,
          <br />
          Advanced, Gold, Platinum, Diamond, and VIP options for personalized
          trading experiences <br />
          and exclusive benefits.
        </p>
      </div>

      <div className="flex flex-col  items-center gap-20 ">
        <PaketCard />
        <PaketCard />
        <PaketCard />
        <PaketCard />
        <PaketCard />
        <PaketCard />
      </div>
    </div>
  );
}
