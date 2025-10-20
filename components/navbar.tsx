import {
  Navbar as HeroUINavbar,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Alert } from "@heroui/alert";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { ChevronDownIcon, MainLogo } from "@/components/icons";

export const Navbar = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (showAlert) {
      timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [showAlert]);

  return (
    <HeroUINavbar
      shouldHideOnScroll
      className="w-full  bg-transparent fixed dark:bg-transparent shadow-none border-none py-4 min-h-[80px]"
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-2 sm:px-8">
        <div className="flex items-center gap-4">
          <NavbarBrand className="max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-2 text-xl"
              href="/"
            >
              <MainLogo />
              <p className="font-bold text-inherit">Edy Mikhael</p>
            </NextLink>
          </NavbarBrand>
          <div className="hidden lg:flex gap-6 ml-4 text-lg">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex gap-3">
            <ThemeSwitch />
          </div>
          <div className="hidden md:flex">
            <Button
              className="text-base font-normal text-default-600 shadow-2xl w-full rounded-lg bg-white/10 px-5 py-2"
              href={"mailto:officialedymikhael@gmail.com"}
              startContent={<ChevronDownIcon className="text-danger w-6 h-6" />}
              variant="flat"
              onPress={() => setShowAlert(true)}
            >
              Download Resume
            </Button>
            {showAlert && (
              <div className="fixed bottom-5 right-5 z-50 animate-fade-in-right">
                <Alert
                  description="lagi diedit nih resume nya, sabar yaa"
                  title="Sabar yakk"
                  onClose={() => setShowAlert(false)}
                />
              </div>
            )}
          </div>
          <div className="sm:hidden flex items-center gap-3">
            <ThemeSwitch />
            <NavbarMenuToggle />
          </div>
        </div>
      </div>

      <NavbarMenu>
        <div className="mx-4 mt-4 flex flex-col gap-3 text-lg">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color="foreground"
                href={item.href}
                size="lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
