"use client";

import { Button } from "@/components/ui/Button";
import { useState } from "react";

export default function GenderSelector() {
  const [selected, setSelected] = useState<"male" | "female" | null>(null);

  return (
    <div className="flex gap-3">
      <Button
        type="button"
        variant={selected === "male" ? "default" : "outline"}
        className="flex-1"
        onClick={() => setSelected("male")}
      >
        Male
      </Button>
      <Button
        type="button"
        variant={selected === "female" ? "default" : "outline"}
        className="flex-1"
        onClick={() => setSelected("female")}
      >
        Female
      </Button>
    </div>
  );
}
