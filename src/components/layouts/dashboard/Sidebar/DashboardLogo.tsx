"use client";

import Image from "next/image";
import Link from "next/link";
import { useSidebar } from "@/components/ui/sidebar";

const DashboardLogo = () => {
  const { state } = useSidebar();
  const is_collapsed = state === "collapsed";

  return (
    <Link href={"/"} className="h-16 flex items-center gap-2">
      <Image
        src={"/icon/logoipsum.svg"}
        alt="Logoipsum"
        width={35}
        height={35}
      />

      {!is_collapsed && (
        <h1 className="text-2xl font-bold text-main-foreground tracking-tight">
          Genzet Daily
        </h1>
      )}
    </Link>
  );
};

export default DashboardLogo;
