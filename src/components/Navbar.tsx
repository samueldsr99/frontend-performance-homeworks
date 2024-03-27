"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Story",
    href: "/about",
  },
  {
    title: "Menu",
    href: "/menu",
  },
  {
    title: "Our Updates",
    href: "/news",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    return pathname === href ? "active" : "";
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-lg">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link className="navbar-brand" href="/">
          {" "}
          Crispy Kitchen{" "}
        </Link>

        <div className="d-lg-none">
          <button
            type="button"
            className="custom-btn btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#BookingModal"
          >
            Reservation
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {items.map((item) => (
              <li className="nav-item" key={item.title}>
                <Link
                  className={`nav-link ${
                    isLinkActive(item.href) ? "active" : ""
                  }`}
                  href={item.href}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="d-none d-lg-block">
          <button
            type="button"
            className="custom-btn btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#BookingModal"
          >
            Reservation
          </button>
        </div>
      </div>
    </nav>
  );
}
