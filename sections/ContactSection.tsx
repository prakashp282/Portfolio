import { useEffect, useRef, useState } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import LinkButton from "@/components/LinkButton";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";
import { contact } from "contents/contact";

const ContactSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);
  const isSecOnScreen = useOnScreen(sectionRef);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    let name = formData.get("name")?.toString().trim();
    let mail = formData.get("email")?.toString().trim();
    let message = formData.get("message")?.toString().trim();

    if (!name || !mail || !message) {
      setResult("Empty Fields!");
      return false;
    }

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: mail,
          message: message,
        }),
      });

      if (response.status == 200) {
        setResult("Form Submitted Successfully");
        event?.target?.reset();
      } else {
        const data = await response.json();
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // Set active link for contact section
  const contactSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    contactSection && onSectionChange!("contact");
  }, [onSectionChange, contactSection]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section min-h-[700px] text-center"
    >
      <div className="text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="text-2xl inline-block my-6 font-medium">
            {contact.title}
          </h2>
        </RoughNotation>
      </div>
      <div className="mt-8">
        <h3 className="font-medium text-lg mb-2 md:text-3xl" ref={elementRef}>
          {contact.heading3}
        </h3>
        <p className="mb-6 mx-auto max-w-lg md:mb-10 lg:leading-loose">
          {contact.heading4}
        </p>
        {/* <LinkButton href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
          {contact.buttonText}
        </LinkButton> */}
      </div>

      <div className="mt-8 mb-20">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            required
            className="mb-4 shadow appearance-none border rounded w-full max-w-lg py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            className="mb-4 shadow appearance-none border rounded w-full max-w-lg py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />

          <textarea
            name="message"
            placeholder="Message *"
            required
            className="mb-4 shadow appearance-none border rounded w-full max-w-lg py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>

          <br />

          <button
            className={`mb-4 bg-lightaccent hover:bg-lightaccenttint active:bg-lightaccentshade dark:hover:bg-darkaccenttint dark:active:bg-darkaccentshade dark:bg-darkaccent text-textlight
           py-2 px-3 rounded lg:text-xl outline-lightaccent dark:outline-darkaccent focus-visible:outline-double outline-offset-2`}
            type="submit"
          >
            Say Hello!
          </button>
        </form>
        <span className="py-2">{result}</span>
      </div>
    </section>
  );
};

export default ContactSection;
