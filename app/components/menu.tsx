"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Strona główna",
        href: "/",
      },
      {
        icon: "/kebab.png",
        label: "Dokumentacja",
        href: "/dokumentacja",
      },
      {
        icon: "/manage.png",
        label: "Prostokąt",
        href: "/prostokat",
      },
      {
        icon: "/logs.png",
        label: "Galeria",
        href: "/galeria",
      },
    ],
  },
];

const Menu = () => {
  const router = useRouter();


  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md "
                >
                  <Image src={item.icon} alt="" width={25} height={25} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
 
    </div>
  );
};

export default Menu;
