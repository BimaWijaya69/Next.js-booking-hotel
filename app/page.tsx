import Hero from "@/components/hero";
import Main from "@/components/main";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold uppercase">Room & Rate</h1>
          <p className="p-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
            aliquam.
          </p>
        </div>
        <Main />
      </div>
    </div>
  );
}
