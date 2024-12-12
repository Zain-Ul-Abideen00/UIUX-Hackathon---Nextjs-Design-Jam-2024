"use client"

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"     
import Link from "next/link"

export function LoginForm() {
  return (
    <div className="w-full max-w-[324px] space-y-4">
      <form className="space-y-6">
        <div className="space-y-4">
          <Input
            type="email"
            placeholder="Email address"
            className="h-10 border-gray-300"
          />
          <Input
            type="password"
            placeholder="Password"
            className="h-10 border-gray-300"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="keepSignedIn" />
            <label htmlFor="keepSignedIn" className="text-sm text-gray-500">
              Keep me signed in
            </label>
          </div>
          <Link href="#" className="text-xs text-gray-400 hover:text-gray-700">
            Forgotten your password?
          </Link>
        </div>

        <p className="text-sm text-center text-gray-500">
          By logging in, you agree to Nike&apos;s{" "}
          <Link href="#" className="underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="#" className="underline">
            Terms of Use
          </Link>
          .
        </p>

        <Button
          type="submit"
          className="w-full rounded-md bg-black hover:bg-gray-800"
        >
          SIGN IN
        </Button>
      </form>

      <div className="text-center">
        <span className="text-sm text-gray-500">
          Not a Member?{" "}
          <Link href="#" className="underline text-gray-700 font-bold">
            Join Us
          </Link>
        </span>
      </div>
    </div>
  );
}
