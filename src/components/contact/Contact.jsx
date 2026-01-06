import { useState } from "react";
import axios from "axios";
import Title from "../reusable/title";
import { useAppearOnScroll } from "../../hooks/useAppearOnScroll";
export default function Contact() {
  const { ref, visible } = useAppearOnScroll(0.4);
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const payload = {
        access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
        first_name: formData.firstName,
        surname: formData.surname,
        email: formData.email,
        phone: formData.phone,
        topic: formData.topic,
        message: formData.message,
      };

      await axios.post("https://api.web3forms.com/submit", payload);

      setMessageType("success");
      setMessage("Message sent successfully!");
      setFormData({
        firstName: "",
        surname: "",
        email: "",
        phone: "",
        topic: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setMessageType("error");
      setMessage("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className={`scroll-mt-14 pt-6 pb-14 px-4 md:pl-14 w-full h-max ${
        visible ? "animate-appear" : "opacity-0 scale-50"
      }`}
      ref={ref}
    >
      <Title text="Get In Touch" className="w-max" />
      <p className="text-left text-textColor-400 mt-6 text-base md:text-lg">
        Have a project in mind or want to collaborate? Feel free to reach out to
        me. I'm always excited to discuss new opportunities and ideas.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 w-full md:w-[calc(100%-150px)] max-w-2xl space-y-6"
      >
        {/* Name Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-textColor-100 placeholder-textColor-600 focus:outline-none focus:border-primary-600 transition duration-200"
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={formData.surname}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-textColor-100 placeholder-textColor-600 focus:outline-none focus:border-primary-600 transition duration-200"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-textColor-100 placeholder-textColor-600 focus:outline-none focus:border-primary-600 transition duration-200"
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number (Optional)"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-textColor-100 placeholder-textColor-600 focus:outline-none focus:border-primary-600 transition duration-200"
        />

        {/* Topic */}
        <input
          type="text"
          name="topic"
          placeholder="Subject"
          value={formData.topic}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-textColor-100 placeholder-textColor-600 focus:outline-none focus:border-primary-600 transition duration-200"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your message here..."
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-textColor-100 placeholder-textColor-600 focus:outline-none focus:border-primary-600 transition duration-200 resize-none"
        ></textarea>

        {/* Message Display */}
        {message && (
          <div
            className={`p-4 rounded-lg text-center font-semibold border transition-all duration-300 ${
              messageType === "success"
                ? "bg-accent-900/20 text-accent-300 border-accent-700"
                : "bg-red-900/20 text-red-300 border-red-700"
            }`}
          >
            {message}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-6 bg-secondary-500 hover:bg-primary-700 disabled:bg-textColor-700 disabled:cursor-not-allowed text-textColor-50 font-semibold rounded-lg transition duration-200"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
