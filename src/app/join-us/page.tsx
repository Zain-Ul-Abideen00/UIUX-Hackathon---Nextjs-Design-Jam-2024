import JoinForm from "@/components/join-us/JoinForm";
import Image from "next/image";

export default function JoinUsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-[380px]">
        <div className="mb-8">
          <Image
            src="/nike.svg"
            alt="Nike"
            width={60}
            height={60}
            className="w-[60px] mx-auto mb-6"
          />
          <h1 className="text-2xl font-bold text-center mb-4">
            BECOME A NIKE MEMBER
          </h1>
          <p className="text-gray-500 text-center">
            Create your Nike Member profile and get first access to the very
            best of Nike products, inspiration and community.
          </p>
        </div>
        <JoinForm />
      </div>
    </div>
  );
}
