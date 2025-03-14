"use client";

import dynamic from "next/dynamic";

const BootstrapClient = dynamic(() => import("@/components/atoms/BootstrapClient"), { ssr: false });

export default function BootstrapWrapper() {
  return <BootstrapClient />;
}
