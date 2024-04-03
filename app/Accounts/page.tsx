import { Navbar } from "../components/Navbar";
import PaketCard from "../components/PaketCard";

export default function About() {
  return (
    <div>
      <div className="pozadina2  ">
        <Navbar />
        <div className=" mx-auto flex items-center justify-center h-screen">
          <div className="flex flex-col w-full md:w-1/2 bg-transparent rounded-lg p-20 ">
            <h1 className="text-5xl text-white font-bold mb-4">
              Trading Accounts <br></br> with the{" "}
            </h1>
            <p className="text-white mb-4">
              Capital Revo offers a wide range of account types,all <br></br>{" "}
              designed to suit a diverse range of trading styles.
            </p>
          </div>
          <div className=" hidden md:flex md:w-1/2"></div>
        </div>
      </div>
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
