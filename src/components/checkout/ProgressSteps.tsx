import { Check } from "lucide-react"

const steps = [
  { id: "delivery", label: "Delivery", status: "current" as const },
  { id: "shipping", label: "Shipping", status: "upcoming" as const },
  { id: "billing", label: "Billing", status: "upcoming" as const },
  { id: "payment", label: "Payment", status: "completed" as const },
] satisfies Array<{
  id: string;
  label: string;
  status: "current" | "upcoming" | "completed";
}>;

export function ProgressSteps() {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div
          key={step.id}
          className={`flex items-center p-4 border-b ${
            step.status === 'current'
              ? 'text-primary'
              : 'text-muted-foreground'
          }`}
        >
          <div className="flex items-center gap-2">
            {step.status === 'completed' ? (
              <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                <Check className="h-4 w-4 text-white" />
              </div>
            ) : (
              <div
                className={`h-6 w-6 rounded-full border ${
                  step.status === 'current'
                    ? 'border-primary'
                    : 'border-muted'
                }`}
              >
                <span className="sr-only">Step {index + 1}</span>
              </div>
            )}
            <span className="font-medium">{step.label}</span>
          </div>
        </div>
      ))}
    </div>
  )
} 