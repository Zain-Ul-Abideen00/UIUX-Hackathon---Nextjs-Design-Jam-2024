import { Metadata } from "next"
import StoreLocator from "@/components/location/store-locator"

export const metadata: Metadata = {
  title: "Find a Store | Nike",
  description: "Find Nike retail stores near you",
}

export default function LocationPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <StoreLocator />
    </main>
  )
} 