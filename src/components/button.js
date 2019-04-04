import React from "react";
import { Link } from "gatsby";

export default function Buttom({ children, to }) {
  return (
    <p>
      {/^\/(?!\/)/.test(to) ? (
        <Link to={to} className="btn btn-primary">
          {children}
        </Link>
      ) : (
        <a
          style={{ display: "inline-block" }}
          className="btn btn-primary"
          href={to}
        >
          {children}
        </a>
      )}
    </p>
  );
}
