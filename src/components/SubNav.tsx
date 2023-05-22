"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "../styles/nav.module.scss";

export default function SubNav() {
  const pathname = usePathname();

  const navItems = [
    { item: "About", path: "/", id: 2 },
    { item: "Articles", path: "/articles", id: 1 },
    { item: "Projects", path: "/projects", id: 3 },
    { item: "Contact", path: "/contact", id: 4 },
  ];
  return (
    <nav className={styles.subNav}>
      <ul className={"flex-row space-between gap-10 justify-center"}>
        {navItems.map((item) => {
          return (
            <li
              key={item.id}
              className={pathname == item.path ? "active-link" : ""}
            >
              <Link href={item.path}>{item.item}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
