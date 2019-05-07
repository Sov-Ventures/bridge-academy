import React from "react";
import { Link } from "gatsby";

export default function Button({ children, to, className }) {
  return (
    <span>
      {/^\/(?!\/)/.test(to) ? (
        <Link to={to} className={className}>
          {children}
        </Link>
      ) : (
        <a
          style={{ display: "inline-block" }}
          className={className}
          href={to}
        >
          {children}
        </a>
      )}
    </span>
  );
}
