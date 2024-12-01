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
      <div className="bg-[#00000099] p-6 md:py-16 lg:py-20 flex flex-col lg:flex-row items-center lg:justify-center lg:items-start gap-16 lg:gap-6">

        <div className="text-white flex flex-col items-center w-full lg:w lg:items-start gap-4 md:w-[600px] lg:w-[486px]">
          <h2 className="font-merriweather font-bold md:text-[28px] lg:text-[40px]">Get in touch</h2>
          <p className="font-lato text-xs md:text-base lg:text-xl leading-[14px] tracking-wide font-medium text-center lg:text-left w-[375px] md:w-full lg:max-w-[486px] ">
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
