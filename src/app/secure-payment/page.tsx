/**
 * v0 by Vercel.
 * @see https://v0.dev/t/N2L7DfK5HwV
 */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Component() {
  return (
    <main
      key="1"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-green-700 p-6"
    >
      <Card className="max-w-xl w-full mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">
            Secure Payment Information
          </CardTitle>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Your card will not be charged
          </p>
        </CardHeader>
        <CardContent className="flex flex-col justify-center p-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="card-number"
            >
              Card Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="card-number"
              placeholder="1234 5678 9012 3456"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="expiry-date"
            >
              Expiry Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="expiry-date"
              placeholder="MM/YY"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="cvv"
            >
              CVV
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cvv"
              placeholder="123"
              type="text"
            />
          </div>
          <p className="text-sm text-gray-500 mb-4 flex items-center">
            <LockIcon className="w-4 h-4 mr-2" />
            Your card details are securely encrypted.
          </p>
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Card
          </Button>
        </CardContent>
      </Card>
      <footer className="max-w-xl w-full mx-auto text-center mt-10">
        <p className="text-sm text-white dark:text-gray-400">
          © 2023 Dapfy. All rights reserved. /
          <a className="text-black hover:text-black" href="#">
            Terms
          </a>
          and
          <a className="text-black hover:text-black" href="#">
            Privacy
          </a>
        </p>
      </footer>
    </main>
  );
}

function LockIcon(props: any) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
