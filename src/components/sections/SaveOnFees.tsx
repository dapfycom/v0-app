/**
 * v0 by Vercel.
 * @see https://v0.dev/t/A2oVO6OYWkO
 */
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <section key="1" className="bg-[#00008B] text-white">
      <div className="container mx-auto px-12 py-24">
        <h2 className="text-6xl font-bold mb-6">Save Big on Fees</h2>
        <p className="text-2xl mb-8">
          Buy crypto with just a 0.1% fee (depending on asset type).
          <br />
          Send money globally, transactions as low as $0.001.
        </p>
        <Button
          className="bg-green-500 text-white text-xl hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 active:bg-green-700 active:shadow-lg"
          variant="default"
        >
          Spend Less on Fees
        </Button>
      </div>
    </section>
  );
}
