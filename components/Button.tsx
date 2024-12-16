import React, { MouseEventHandler } from "react";

function Button({
  handleClick,
  title,
  scrollTo,
  className,
}: {
  handleClick: MouseEventHandler;
  title: string;
  scrollTo: string;
  className?: string;
}) {
  return (
    <button
      role="button"
      onClick={(e) => {
        handleClick(e);
        window.location.href = "#" + scrollTo;
      }}
      className={`bg-lightaccent hover:bg-lightaccenttint active:bg-lightaccentshade dark:hover:bg-darkaccenttint dark:active:bg-darkaccentshade dark:bg-darkaccent text-textlight py-2 px-3 rounded lg:text-l outline-lightaccent dark:outline-darkaccent focus-visible:outline-double  outline-offset-2 px-4 mt-4
     ${className} py-1.5 rounded-md hover:shadow-xl transition-all `}
    >
      {title}
    </button>
  );
}

export default Button;
