"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import API from "../API/Api";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await API.get("/auth/token-verify", {
          withCredentials: true,
        });
        if (response.status !== 200) {
          router.push("/login");
        }
      } catch (error) {
        if (error) router.push("/login");
      }
    };

    checkAuth();
  }, [router]);

  return <>{children}</>;
}
