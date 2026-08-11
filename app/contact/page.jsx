import Header from "../components/Header";
import Footer from "../components/Footer";
import company from "../../data/company.json";

const telHref = "tel:1" + company.phone.replace(/\D/g, "");

export const metadata = {
  title: "Contact | Logan Law Firm, LLC",
  description: "Contact Logan Law Firm in Lafayette, Louisiana — schedule a consultation or ask a question.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-[#2c3b4c] text-white py-20">
        <div className="absolute inset-0">
          <img
            src="/images/lft-courthouse.jpg"
            alt="Lafayette Courthouse"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Logan Law Firm</h1>
          <p className="mt-4 text-lg text-slate-200">
            We’re here to help with your legal needs — from estate planning to litigation.
          </p>
        </div>
      </section>

      {/* ===== CONTACT FORM SECTION ===== */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          {/* Left: Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2c3b4c] mb-4">Send Us a Message</h2>
            
<form action="https://formspree.io/f/xrebnkld" method="POST" className="grid grid-cols-1 gap-4">
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2c3b4c]"
  />

  <input
    type="email"
    name="email"
    placeholder="Email Address"
    required
    className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2c3b4c]"
  />

  <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
    required
    className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2c3b4c]"
  />

  <textarea
    name="message"
    rows="5"
    placeholder="How can we help you?"
    required
    className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2c3b4c]"
  />

  {/* Optional but recommended */}
  <input type="hidden" name="_subject" value="New Website Inquiry" />
  <input type="hidden" name="_template" value="table" />
  <input type="text" name="_gotcha" style={{ display: "none" }} />

  <button
    type="submit"
    className="bg-[#2c3b4c] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
  >
    Send Message
  </button>
</form>

          </div>

          {/* Right: Office Info */}
          <div className="bg-[#f8f9fb] p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#2c3b4c] mb-3">Our Office</h3>
            <p className="text-slate-700 mb-4">
              <strong>{company.name}</strong><br />
              {company.address.street}<br />
              {company.address.city}, {company.address.state} {company.address.zip}
            </p>
            <p className="text-slate-700 mb-4">
              Phone: <a href={telHref} className="underline hover:text-[#2c3b4c]">{company.phone}</a><br />
              Email: <a href={`mailto:${company.email}`} className="underline hover:text-[#2c3b4c]">{company.email}</a>
            </p>
            <iframe
              title={`${company.name} Location`}
              src={company.map_embed_url}
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}