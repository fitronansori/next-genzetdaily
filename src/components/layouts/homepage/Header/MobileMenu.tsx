import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustifyIcon } from "lucide-react";
import NavLinks from "./NavLinks";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"neutral"} className="lg:hidden">
          <AlignJustifyIcon />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader className="hidden">
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>

        <NavLinks className="w-full min-h-screen flex-col items-center justify-center gap-8 space-x-0 px-4" />
      </SheetContent>
    </Sheet>
  );
};
export default MobileMenu;
