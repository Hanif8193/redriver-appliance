interface LogoProps {
  tone?: "dark" | "light";
}

export default function Logo({ tone = "dark" }: LogoProps) {
  const wordColor = tone === "light" ? "text-white" : "text-stone-900";

  return (
    <span className="flex items-center gap-2.5">
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="size-8 shrink-0"
      >
        <rect x="4" y="3" width="24" height="26" rx="4" fill="#b91c1c" />
        <rect x="9" y="13" width="14" height="11" rx="1.5" fill="#fff" />
        <circle cx="12" cy="8" r="2" fill="#fff" />
        <circle cx="20" cy="8" r="2" fill="#fca5a5" />
        <path
          d="M12.5 17h7M12.5 20.5h4.5"
          stroke="#b91c1c"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`text-[15px] font-extrabold leading-tight tracking-tight sm:text-base ${wordColor}`}
      >
        Red River{" "}
        <span className={tone === "light" ? "text-brand-300" : "text-brand-700"}>
          Appliance Service
        </span>
      </span>
    </span>
  );
}
