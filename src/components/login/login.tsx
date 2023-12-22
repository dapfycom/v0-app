"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { signIn, signOut, useSession } from "next-auth/react";
import { MouseEvent, useState } from "react";

/**
 * Login component that displays a sign up modal.
 * Renders a sign up button that opens the modal on click.
 * The modal contains info about account security and a button to sign up.
 */
export default function Login() {
  const [open, setOpen] = useState(false);

  const handleClickOutside = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    if (
      (event.target as HTMLElement).className ===
      "bg-black bg-opacity-50 absolute inset-0"
    ) {
      setOpen(false);
    }
  };

  const { data: session } = useSession();
  let button = <></>;
  console.log("session", session);

  if (session) {
    button = (
      <>
        <Button
          className="bg-green-500 hover:bg-green-600 text-white border-2 border-transparent hover:border-white rounded-full"
          onClick={() => signOut()}
        >
          Sign out
        </Button>
      </>
    );
  } else {
    button = (
      <Button
        className="bg-green-500 hover:bg-green-600 text-white border-2 border-transparent hover:border-white rounded-full"
        variant="secondary"
        onClick={() => setOpen(true)}
      >
        Sign Up with Google
      </Button>
    );
  }

  return (
    <>
      {button}
      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={(e) => handleClickOutside(e)}
        >
          <div className="bg-black bg-opacity-50 absolute inset-0" />
          <div className="bg-white rounded-lg w-1/3 max-w-sm mx-auto z-50 overflow-y-auto">
            <header className="flex justify-center items-center px-4 py-3 bg-blue-500 text-white rounded-t-lg">
              <h1 className="text-md font-bold text-center">
                Secure, Non-Custodial Crypto Banking
              </h1>
            </header>
            <main className="px-4 py-3 space-y-4">
              <Card className="bg-white shadow-md rounded-lg">
                <CardHeader className="px-4 py-3 flex justify-center items-center">
                  <CardTitle className="text-lg font-bold">
                    Your safety is our priority.
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 py-3 space-y-2">
                  <p className="text-gray-700">
                    When you sign up, we create a crypto wallet for you.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li className="text-gray-700">
                      Your private key is divided into three separate parts
                      using
                      <a className="underline text-blue-500" href="#">
                        Shamir&apos;s Secret Sharing
                      </a>
                      .{"\n                              "}
                    </li>
                    <li className="text-gray-700">
                      Each part is stored in a different location: one in Google
                      Drive, another on your device, and the third on our secure
                      server.
                    </li>
                    <li className="text-gray-700">
                      This method ensures no single entity can access your
                      entire key, maintaining your privacy and control.
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <div className="flex justify-center">
                <Button
                  className="bg-blue-500 text-white hover:bg-blue-600 px-3 py-1"
                  onClick={() => {
                    signIn("google");
                  }}
                >
                  Sign up with Google
                </Button>
              </div>
            </main>
            <footer className="px-4 py-3 text-center text-gray-600 rounded-b-lg">
              <p>© 2023 Dapfy. All rights reserved.</p>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}
