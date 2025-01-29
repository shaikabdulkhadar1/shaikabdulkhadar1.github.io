import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <motion.div
      className="main-div px-6 pt-8 pb-8 md:h-[600px] lg:h-[620px] overflow-auto flex justify-center items-center"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
    >
      <div className=" p-6 rounded-lg text-center text-fontColor">
        <h1 className="font-outfit text-2xl font-bold mb-4">Contact Me</h1>
        <p className="font-poppins text-sm m-3 mb-20 opacity-85">
          Feel free to reach out anytime! Whether you have a question, need
          assistance, or simply want to say hello, my inbox is always open. I’ll
          do my very best to respond promptly and provide the support or
          conversation you're looking for!
        </p>
        <a
          href="mailto:shaikabdulkhadar1.shaik@gmail.com"
          className="font-poppins text-sm p-4 rounded-lg opacity-80 bg-navBar text-[#FFFFFF] hover:bg-[#2D3142]"
        >
          Send Email
        </a>
      </div>
    </motion.div>
  );
};

export default ContactMe;
