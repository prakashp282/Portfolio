import { useSection } from "context/section";
import { socialLinks } from "contents/social-link";

const SocialLinks: React.FC<{ page?: string }> = ({ page }) => {
  const { currentSection } = useSection();
  return (
    <>
      <div className="hidden fixed right-10 bottom-0 md:flex flex-col w-6 h-[15rem] items-center justify-between">
        <div className="flex flex-col space-y-6">
          {socialLinks.map(
            (social) =>
              //null check
              social && (
                <a
                  key={social.id}
                  title={social.title}
                  href={social.link}
                  className="scale-110 rounded link-outline"
                >
                  {social.svg}
                </a>
              )
          )}
        </div>
        <div className="w-40 h-1 bg-bgdark dark:bg-bglight rotate-90"></div>
      </div>
    </>
  );
};

export default SocialLinks;
