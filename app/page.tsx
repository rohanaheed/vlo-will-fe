import Image from "next/image";
import Dashboard from "./dashboard/page";
import UserHeader from "@/components/common/UserHeader";
import Footer from "@/components/common/Footer";
import Home from "./home/Page";
export default function Page() {
  return (
    <div className="bg-white">
      <main className="h-full">
        <Home />
      </main>
    </div>
  );
}
