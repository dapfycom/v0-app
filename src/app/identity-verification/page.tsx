/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GO1jp1Hjyy8
 */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Component() {
  return (
    <div key="1" className="flex flex-col min-h-screen">
      <main className="flex flex-col items-center space-y-6 p-4 bg-green-500 flex-grow">
        <Card className="w-full max-w-md">
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-semibold text-center">
              Identity Verification Required
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              By law, we must verify your identity through a KYC process.
            </p>
            <h2 className="text-md text-gray-500 dark:text-gray-400 flex items-center justify-center">
              <LockIcon className="w-4 h-4 mr-2" />
              Your data is securely encrypted.
            </h2>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input id="dob" required type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="123 Main St" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="photo-id">
                Upload ID, Passport or Driving licence
              </Label>
              <Input id="photo-id" required type="file" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="selfie">Take a Selfie</Label>
              <Input id="selfie" required type="file" />
            </div>
          </CardContent>
        </Card>
        <Card className="w-full max-w-md">
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Checkbox id="confirm-identity" required />
              <Label htmlFor="confirm-identity">
                I confirm the information is accurate and true.
              </Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="agree-tnc" required />
              <Label htmlFor="agree-tnc">
                I agree to the terms and conditions.
              </Label>
              <Link
                className="underline text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                href="#"
              >
                View terms
              </Link>
            </div>
          </CardContent>
        </Card>
        <Button className="w-1/2 bg-blue-500 text-white" type="submit">
          Submit
        </Button>
      </main>
      <footer className="p-4 text-center bg-green-500 text-white">
        © 2023 Dapfy. All rights reserved. /
        <Link
          className="underline text-white hover:text-gray-200 dark:text-gray-400 dark:hover:text-gray-300"
          href="#"
        >
          Terms
        </Link>{" "}
        and{" "}
        <Link
          className="underline text-white hover:text-gray-200 dark:text-gray-400 dark:hover:text-gray-300"
          href="#"
        >
          Privacy
        </Link>
      </footer>
    </div>
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
