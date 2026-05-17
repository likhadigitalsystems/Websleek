import { Link } from "react-router-dom";

type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary:
    "gradient-brand text-white shadow-lg shadow-websleek-blue/25 hover:brightness-110",
  secondary: "bg-websleek-dark text-white hover:bg-websleek-ocean",
  outline:
    "border-2 border-websleek-blue text-websleek-blue hover:bg-websleek-blue hover:text-white",
};

export function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
