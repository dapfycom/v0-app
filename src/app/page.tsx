/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8HVRMEAehPy
 */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export default function Component() {
  return (
    <div key="1" className="bg-[#00008B] text-[#36454F] flex flex-col">
      <nav className="flex justify-between items-center p-5">
        <div className="flex items-center space-x-4">
          <img
            alt="Dapfy logo"
            className="h-10"
            height="40"
            src="/placeholder.svg"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width="40"
          />
          <h1 className="text-2xl font-bold text-green-500 hover:underline">
            Dapfy
          </h1>
        </div>
        <div className="space-x-4">
          <Link
            className="text-green-500 hover:text-green-600 hover:underline"
            href="#"
          >
            Crypto Savings Account
          </Link>
          <Link
            className="text-green-500 hover:text-green-600 hover:underline"
            href="#"
          >
            Send Crypto
          </Link>
          <Link
            className="text-green-500 hover:text-green-600 hover:underline"
            href="#"
          >
            Buy Crypto
          </Link>
          <Link
            className="text-green-500 hover:text-green-600 hover:underline"
            href="#"
          >
            Sell Crypto
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2 cursor-pointer">
            <LanguagesIcon className="w-4 h-4" />
          </div>
          <Button
            className="bg-green-500 hover:bg-green-600 text-white border-2 border-transparent hover:border-white rounded-full"
            variant="secondary"
          >
            Login with Google
          </Button>
        </div>
      </nav>
      <header className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h2 className="text-6xl font-bold text-green-500 mb-4">
          Your Savings Account That Keeps On Growing
        </h2>
        <p className="text-xl text-white mb-8">
          Secure, Non-Custodial Crypto Banking
        </p>
        <Button className="bg-green-500 hover:bg-green-600 text-white py-3 px-5 rounded text-lg">
          Start Earning Today
        </Button>
      </header>
      <main className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h2 className="text-4xl font-bold text-green-500 mb-8">Why Dapfy</h2>
        <section>
          <Card className="mb-8">
            <CardHeader className="text-2xl font-bold text-green-500">
              Secure Vault
            </CardHeader>
            <CardContent className="text-xl text-white">
              Experience top-notch security for your digital assets.
            </CardContent>
          </Card>
          <Card className="mb-8">
            <CardHeader className="text-2xl font-bold text-green-500">
              Investment Growth
            </CardHeader>
            <CardContent className="text-xl text-white">
              Your investments with us will always be on the rise.
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-2xl font-bold text-green-500">
              Trust & Transparency
            </CardHeader>
            <CardContent className="text-xl text-white">
              We believe in building trust through transparency.
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}

function LanguagesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 8 6 6" />
      <path d="m4 14 6-6 2-3" />
      <path d="M2 5h12" />
      <path d="M7 2h1" />
      <path d="m22 22-5-10-5 10" />
      <path d="M14 18h6" />
    </svg>
  );
}
