import React from "react";
import LogoVPN from "../../public/images/loqo-1-.png";
import Image from "next/image";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FooterType } from "../types/FooterType";

interface FooterProps {
  t: FooterType;
}

const Footer = ({ t }: FooterProps) => {
  return (
    <footer className="bg-white-300 text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 items-center">
          {/* Logo and Social Section */}
          <div className="space-y-4">
            <Image src={LogoVPN} alt="Venta Academy" width={180} height={40} />
            <p className="text-sm leading-6">{t.empowering}</p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1B62Wf6Vci/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-white transition-colors"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.tiktok.com/@venta_academy?_t=ZS-8spiSMeNUdV&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-white transition-colors"
              >
                <FaTiktok className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/venta_academy/profilecard/?igsh=MTJlNzkza3VzMnQwNg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-white transition-colors"
              >
                <BsInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t.quickLinks.title}
            </h3>
            <ul className="space-y-2">
              {[
                { name: t.quickLinks.about, href: "/about" },
                { name: t.quickLinks.courses, href: "/courses" },
                { name: t.quickLinks.tutors, href: "/tutors" },
                { name: t.quickLinks.blog, href: "/blog" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.support.title}</h3>
            <ul className="space-y-2">
              {[
                { name: t.support.faq, href: "/faq" },
                { name: t.support.contact, href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.contact.title}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:info@ventaacademy.com"
                  className="hover:text-white transition-colors"
                >
                  info@venta.az
                </a>
              </li>
              <li>
                <a
                  href="tel:+994516388838"
                  className="hover:text-white transition-colors"
                >
                  +994516388838
                </a>
              </li>
              <li className="text-gray-400">{t.contact.address}</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Venta Academy. {t.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
