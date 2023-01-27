import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

function Button(props) {
  // implementasi dari props yang kita terima tadi
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isLarge) className.push("btn-lg");
  if (props.isSmall) className.push("btn-sm");
  if (props.isBlock) className.push("btn-block");
  if (props.hasShadow) className.push("btn-shadow");

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  // rendering component
  if (props.type === "link") {
    if (props.isExternall) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }

  return <div></div>;
}

export default Button;

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  target: propTypes.string,
  href: propTypes.string,
  className: propTypes.string,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  isExternall: propTypes.bool,
  hasShadow: propTypes.bool,
};

// taget itu untuk link externall, isExternall itu untuk memastikan apakah link itu mengarah ke luar aplikasi atau ke dalam aplikasi (jika luar pakai tag a, jika di dalam aplikasi pakai link dari react-router-dom)
