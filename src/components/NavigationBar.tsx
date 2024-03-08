import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Image,
  Input,
  NavbarMenu,
  NavbarMenuItem, NavbarMenuToggle
} from "@nextui-org/react";
import {SearchIcon} from "./icons/SearchIcon.tsx";
import {useState} from "react";

const menuItems = [
  "Movies",
  "Planets",
  "Characters",
  "Ships",
];

export const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            isZoomed
            width={50}
            alt="sw-logo"
            src="./sw-logo.jpeg"
          />
          <p className="font-bold text-inherit ml-2">Star Wars</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, i) => (
          <NavbarItem key={item} isActive={i === 1}>
            <Link color={i === 1 ? undefined : 'foreground'} href="#">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="dark">
        {menuItems.map((item, i) => (
          <NavbarMenuItem key={item}>
            <Link
              color={
                i === 1 ? undefined : 'foreground'
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
