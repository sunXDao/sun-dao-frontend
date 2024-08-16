import Button from "../Button";

export default function Hero() {
  return (
    <section className="w-4/5 mx-auto flex flex-col items-center py-20">
      <div className="mb-60 text-center">
        <h2 className="font-bold text-5xl leading-[70px]">Power the Future with <br /> Decentralized Solar Investments</h2>
        <p className="font-medium text-xl leading-9">Join SunDAO to own, profit from, and scale sustainable <br /> energy projects globally.</p>
      </div>
      <div className="flex gap-40">
        <Button variant={true}>Launch app</Button>
        <Button variant={false}>Read Docs</Button>
      </div>
    </section>
  )
}
