"use client";

import Link from "next/link";
import company from "../../data/company.json";

const telHref = "tel:1" + company.phone.replace(/\D/g, "");

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      {/* ===== CONTACT / INFO STRIP ===== */}
      <section aria-labelledby="contact-info">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-8">

            {/* Logo */}
            <div className="flex justify-center md:justify-start">
              <img
                src="/images/2025TransparentLogo2025.png"
                alt="The Logan Law Firm"
                className="h-20 md:h-24 w-auto"
              />
            </div>

            {/* Address */}
            <div className="relative">
              <div className="hidden md:block absolute -left-6 top-1/2 -translate-y-1/2 h-12 w-px bg-slate-200" />
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#0d1b2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 11a4 4 0 100-8 4 4 0 000 8z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M20 11c0 6-8 11-8 11S4 17 4 11a8 8 0 1116 0z" />
                </svg>
                <div>
                  <div className="font-semibold text-slate-800">Address</div>
                  <div className="text-slate-600">
                    {company.address.street}<br />{company.address.city}, {company.address.state} {company.address.zip}
                  </div>
                  <a
                    href={company.map_link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0d1b2a] underline mt-1 inline-block"
                  >
                    Louisiana Office Map
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="relative">
              <div className="hidden md:block absolute -left-6 top-1/2 -translate-y-1/2 h-12 w-px bg-slate-200" />
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#0d1b2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M2 5a2 2 0 012-2h2.28a1 1 0 01.95.684l1.1 3.3a1 1 0 01-.27 1.06L7.16 9.72a15.05 15.05 0 006.12 6.12l1.676-1.9a1 1 0 011.06-.27l3.3 1.1a1 1 0 01.684.95V20a2 2 0 01-2 2h-1C8.268 22 2 15.732 2 8V7a2 2 0 012-2z" />
                </svg>
                <div>
                  <div className="font-semibold text-slate-800">Phone</div>
                  <a href={telHref} className="text-[#0d1b2a] underline block">
                    {company.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Review button + Social */}


          </div>
        </div>
      </section>

      {/* ===== COPYRIGHT STRIP ===== */}
      <div className="bg-[#2c3b4c] text-gray-300 text-sm text-center py-4">
        © {new Date().getFullYear()} {company.name} · All Rights Reserved | Managed by <a href={company.managed_by.url} target="_blank">{company.managed_by.name}</a>
      </div>
    </footer>
  );
}
