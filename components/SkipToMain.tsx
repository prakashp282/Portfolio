const SkipToMain: React.FC = () => {
  return (
    <a
      role="button"
      className={`py-2 px-3 absolute left-2 opacity-95 outline-lightaccent  dark:outline-darkaccent rounded-b-lg transition-transform -translate-y-52 focus:transform focus:translate-y-0 lg:text-xl z-50 bg-lightaccent dark:bg-darkaccent text-textlight`}
      href="#main"
    >
      Skip to main content
    </a>
  );
};

export default SkipToMain;
