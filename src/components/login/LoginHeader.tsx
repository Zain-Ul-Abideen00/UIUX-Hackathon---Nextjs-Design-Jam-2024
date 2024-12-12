import Image from "next/image";

export function LoginHeader() {
  return (
    <div className="flex flex-col items-center space-y-6">
      <Image
        src="/nike.svg"
        alt="Nike Logo"
        width={60}
        height={40}
      />
      <h1 className="text-center text-xl font-bold text-gray-900 max-w-[280px]">
        YOUR ACCOUNT FOR EVERYTHING NIKE
      </h1>
    </div>
  );
}
