"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import GenderSelector from "./GenderSelector";
import NewsletterCheckbox from "./NewsLetter";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function JoinForm() {
  const form = useForm();

  return (
    <Form {...form}>
      <form className="space-y-4">
        <FormField
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email address" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="First Name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Last Name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="dateOfBirth"
          render={({ field }) => (
            <div className="space-y-2">
              <FormItem>
                <FormControl>
                  <Input type="date" placeholder="Date of Birth" {...field} />
                </FormControl>
              </FormItem>
              <p className="text-sm text-gray-500">
                Get a Nike Member Reward every year on your Birthday.
              </p>
            </div>
          )}
        />

        <FormField
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pk">Pakistan</SelectItem>
                    <SelectItem value="in">India</SelectItem>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="ae">United Arab Emirates</SelectItem>
                    <SelectItem value="ar">Argentina</SelectItem>
                    <SelectItem value="at">Austria</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    {/* Add more countries as needed */}
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />

        <GenderSelector />
        <NewsletterCheckbox />

        <p className="text-sm text-center text-gray-500">
          By creating an account, you agree to Nike&apos;s{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Terms of Use
          </a>
          .
        </p>

        <Button
          type="submit"
          className="w-full rounded-md bg-black text-white hover:bg-gray-900"
        >
          JOIN US
        </Button>

        <p className="text-center text-sm">
          Already a Member?{" "}
          <a href="#" className="text-black underline">
            Sign In
          </a>
        </p>
      </form>
    </Form>
  );
}
