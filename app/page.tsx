import Image from "next/image";
import Dashboard from "./dashboard/page";
import UserHeader from "@/components/common/UserHeader";

export default function Home() {
  return (
    <div className="bg-[#eaeaea] h-[calc(100vh-88px)]">
      <main className="h-full">
        <UserHeader />
      </main>
    </div>
  );
}
