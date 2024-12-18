import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface QuantitySelectorProps {
  value: number;
  onChange: (qty: number) => void;
  max: number;
}

export default function QuantitySelector({ value, onChange, max }: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-500 text-sm sm:text-base">Quantity</span>
      <Select value={value.toString()} onValueChange={(val) => onChange(Number(val))}>
        <SelectTrigger className="w-[60px] sm:w-[70px] h-[35px] sm:h-[40px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: max }, (_, i) => i + 1).map((num) => (
            <SelectItem key={num} value={num.toString()}>
              {num}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
} 