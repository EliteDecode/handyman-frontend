import bg from "@/assets/images/message-bg.png";
import ContactForm from "./ContactForm";

const ContactMessage = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover w-full "
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="bg-[#00000099]  p-6 flex flex-col items-center gap-16">
        <div className="text-white flex flex-col items-center w-full justify-center gap-4">
          <h2 className="font-merriweather font-bold">Get in touch</h2>
          <p className="font-lato text-xs leading-[14px] tracking-wide font-medium text-center  max-w-[375px]  ">
            Have questions or need assistance? Our team is here to help Reach
            out to us with any inquiries, feedback, or assistance requests, and
            we’ll get back to you as soon as possible. Let’s make every
            connection a success!
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default ContactMessage;
