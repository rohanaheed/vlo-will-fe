"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ADMIN_LOGIN_PATH = "/admin/login";

function getAdminToken() {
  if (typeof window === "undefined") return null;
  try {
    const adminInfo = localStorage.getItem("adminInfo");
    if (!adminInfo) return null;
    const parsed = JSON.parse(adminInfo);
    const token =
      parsed?.data?.tokens?.accessToken ??
      parsed?.tokens?.accessToken ??
      parsed?.accessToken ??
      parsed?.token;
    return token || null;
  } catch {
    return null;
  }
}

export default function AdminRouteGuard({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const token = getAdminToken();
    const isLoginPage = pathname === ADMIN_LOGIN_PATH;

    if (isLoginPage) {
      if (token) {
        router.replace("/admin/dashboard");
        return;
      }
    } else {
      if (!token) {
        router.replace(ADMIN_LOGIN_PATH);
        return;
      }
    }

    setIsChecking(false);
  }, [pathname, router]);

  if (isChecking) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-gray-50">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--color-main)] border-t-transparent" />
      </div>
    );
  }

  return children;
}
