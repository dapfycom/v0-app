/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JizksCQIcFX
 */
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <section key="1" className="bg-[#00008B] text-white">
      <div className="container mx-auto px-12 py-24">
        <h2 className="text-6xl font-bold mb-6">
          Earn Up To 35% On Your Money
        </h2>
        <p className="text-2xl mb-8">
          Join our savings plan today and make the most of your money.
          <br />
          No hidden charges, no withdrawal limits.
        </p>
        <Button
          className="bg-green-500 text-white text-xl hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 active:bg-green-700 active:shadow-lg"
          variant="default"
        >
          Deposit today and start earning
        </Button>
      </div>
    </section>
  );
}
