/**
 * v0 by Vercel.
 * @see https://v0.dev/t/i4xZBi6fSav
 */
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <section key="1" className="bg-[#2c2c8d] text-white py-20 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2" />
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold leading-tight inline">
            Send money anywhere. Instantly.
          </h1>
          <p className="text-2xl">True financial freedom that simply works.</p>
          <Button className="bg-[#34d399] hover:bg-[#2ccf91] text-white font-bold py-3 px-6 text-2xl rounded">
            Send money now
          </Button>
        </div>
      </div>
    </section>
  );
}
