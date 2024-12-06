type Props = {
  href: string;
  targetBlank?: boolean;
  outline?: boolean;
  className?: string;
  children: React.ReactNode;
};

const LinkButton: React.FC<Props> = ({
  href,
  targetBlank = false,
  outline = false,
  className = "",
  children,
}) => {
  return (
    <a
      role="button"
      className={`${
        outline
          ? "border border-lightaccent hover:bg-lightaccent dark:border-darkaccent dark:hover:bg-darkaccent text-lightaccent hover:text-cardlight dark:text-darkaccent dark:hover:text-carddark transition"
          : "bg-lightaccent hover:bg-lightaccenttint active:bg-lightaccentshade dark:hover:bg-darkaccenttint dark:active:bg-darkaccentshade dark:bg-darkaccent text-textlight"
      } py-2 px-3 rounded lg:text-xl ${className} outline-lightaccent dark:outline-darkaccent focus-visible:outline-double outline-offset-2`}
      href={href}
      target={`${targetBlank ? "_blank" : "_self"}`}
    >
      {children}
    </a>
  );
};

export default LinkButton;
