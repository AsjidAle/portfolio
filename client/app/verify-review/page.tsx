"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import api from "../api";

export default function VerifyReview() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<string>("Verifying...");

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      setStatus("Invalid verification link");
      return;
    }

    api
      .get(`/review/verify-review`, {
        params: { token },
      })
      .then((res) => {
        if (res.data.message === "Review verified successfully") {
          setStatus(" Your review has been verified!");
        } else {
          setStatus(` ${res.data.message || "Verification failed"}`);
        }
      })
      .catch(() => setStatus(" Server error while verifying review"));
  }, [searchParams]);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>{status}</h2>
    </div>
  );
}
