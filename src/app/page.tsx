"use client";

import OnboardingModal from "@/components/onboarding-modal";
import { JOB_TITLE_KEY, USERNAME_KEY } from "@/utils/constants";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

export default function Home() {
  /** this will serve as guard */
  useLayoutEffect(() => {
    const username =
      localStorage.getItem(USERNAME_KEY) && localStorage.getItem(JOB_TITLE_KEY);

    if (username) {
      redirect("/info");
    }
  }, []);

  return (
    <main>
      <OnboardingModal />
    </main>
  );
}
