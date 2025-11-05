'use client'

import Link from "next/link"
import Image from "next/image"
import {
  Mail,
  MapPin,
  Phone,
  Globe
} from "lucide-react"
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations("Footer")

  const footerLinks = {
    services: [
      { label: t("links.services.items.1"), href: "#services" },
      { label: t("links.services.items.2"), href: "#services" },
      { label: t("links.services.items.3"), href: "#services" },
      { label: t("links.services.items.4"), href: "#services" },
    ],
    company: [
      { label: t("links.company.items.1"), href: "/" },
      { label: t("links.company.items.2"), href: "#localai" },
      { label: t("links.company.items.3"), href: "#services" },
      { label: t("links.company.items.4"), href: "#contact" },
    ],
  }

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/halseus", label: "GitHub" },
    { icon: FaTwitter, href: "https://twitter.com/halseus", label: "Twitter" },
    { icon: FaLinkedin, href: "https://linkedin.com/company/halseus", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:info@halseus.com", label: "Email" },
  ]

  return (
    <footer className="bg-black border-t border-white/10 relative">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center gap-3 mb-4 group w-fit">
                <div className="relative w-12 h-12 transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300">
                  <Image
                    src="/assets/images/halseus.png"
                    alt="Halseus"
                    fill
                    className="object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.8)] transition-all duration-300"
                  />
                </div>
                <h3 className="text-2xl font-pixel font-bold bg-white bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                  {t("company.name")}
                </h3>
              </Link>
              <p className="text-gray-400 leading-relaxed mb-6">
                {t("company.description")}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span className="text-sm">{t("contact.address")}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4 text-blue-500" />
                <span className="text-sm">{t("contact.phone")}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="text-sm">{t("contact.email")}</span>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-linear-to-br hover:from-blue-500/20 hover:to-purple-600/20 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("links.services.title")}</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("links.company.title")}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {t("company.name")}. {t("copyright")}
            </p>

            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Globe className="w-4 h-4" />
              <span>{t("language")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
    </footer>
  )
}