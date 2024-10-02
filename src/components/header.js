import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const links = [
  { path: "/", label: "HOME" },
  { path: "/Destination", label: "DESTINATION" },
  { path: "/Crew", label: "CREW" },
  { path: "/Technology", label: "TECHNOLOGY" },
];

function Header({ activeLink, onLinkClick }) {
  return (
    <div className="header">
      <ol>
        {links.map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              onClick={() => onLinkClick(label.toLowerCase())}
              className={activeLink === label.toLowerCase() ? "active" : ""}
            >
              {label}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Header;
