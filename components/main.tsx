import Card from "@/components/card";

function Main() {
  return (
    <div className="max-w-screen-xl pb-20 px-4 py-8 mx-auto">
      <div className="grid gap-7 md:grid-cols-3 ">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Main;
