import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-gradient-to-r from-blue-500 to-sky-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40",
  secondary:
    "bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-white/25",
  outline:
    "border border-blue-400/50 text-blue-300 hover:bg-blue-500/10 hover:border-blue-400",
  ghost: "text-slate-300 hover:text-white hover:bg-white/5",
};

export default function Button({
  children,
  variant = "primary",
  to,
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  icon: Icon,
  fullWidth = false,
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 disabled:opacity-50 disabled:cursor-not-allowed";

  const classes = `${base} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`;

  const content = (
    <>
      {children}
      {Icon && <Icon className="h-4 w-4" />}
    </>
  );

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.98 },
  };

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}