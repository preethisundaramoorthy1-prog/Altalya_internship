"use client";

import { TinaCMS, TinaProvider } from "tinacms";
import { useMemo } from "react";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const cms = useMemo(() => {
    return new TinaCMS({
      enabled: false, // 🔥 IMPORTANT: disable for now to stop errors
    });
  }, []);

  return <TinaProvider cms={cms}>{children}</TinaProvider>;
}