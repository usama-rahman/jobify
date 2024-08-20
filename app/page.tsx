import Image from "next/image";
import Logo from "../public/assets/logo.svg";
import LandingImg from "../public/assets/main.svg";

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image src={Logo} alt="logo" />
      </header>

      <section className="max-w-6xl mx-auto mt-20 px-4 grid sm:px-8 h-screen lg:grid-cols-[1fr , 400px] items-center ">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold ">
            Job <span className="text-primary ">traking</span> app
          </h1>
        </div>
        <Image src={LandingImg} alt="landing" className="hidden lg:block " />
      </section>
    </main>
  );
}
