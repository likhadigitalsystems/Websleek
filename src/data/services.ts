export const businessContact = {
  phone: "+63 946 482 5524",
  phoneHref: "tel:+639464825524",
  email: "info@websleekitsolutions.com",
  emailHref: "mailto:info@websleekitsolutions.com",
} as const;

export const services = [
  {
    slug: "server-hosting",
    title: "Server Hosting & Management",
    shortTitle: "Server Hosting",
    tagline: "Managed infrastructure through a subscription plan",
    description:
      "We provide and manage the server infrastructure for your business through a subscription plan.",
    image: "/assets/services/thumbnails/Hosting.png",
    accent: "teal",
    features: [
      "Cloud hosting",
      "Database servers",
      "File storage",
      "Website/application hosting",
      "Server maintenance & monitoring",
      "Security updates and backups",
      "Technical support",
    ],
  },
  {
    slug: "pos-systems",
    title: "POS (Point of Sale) Systems",
    shortTitle: "POS Systems",
    tagline: "Sales, inventory, and transactions in one system",
    description:
      "We help businesses handle sales, inventory, and transactions efficiently in one system.",
    image: "/assets/services/thumbnails/POS%20Service.png",
    accent: "blue",
    features: [
      "Sales & Checkout System",
      "Inventory Management",
      "Receipt Printing",
      "Barcode Scanning",
      "Sales Reports & Analytics",
      "Customer Management",
      "Multi-user Access",
      "Cloud-Based POS Access",
    ],
  },
  {
    slug: "website-design",
    title: "Website Design & Development",
    shortTitle: "Web Design",
    tagline: "Professional websites that grow your business online",
    description:
      "We create professional websites that help businesses promote their services, attract customers, and operate online efficiently.",
    image: "/assets/services/thumbnails/WebDev.png",
    accent: "ocean",
    features: [
      "Company profile websites",
      "Online ordering systems",
      "SEO optimization",
      "E-commerce / online stores",
      "Domain & hosting setup",
      "Booking or appointment systems",
      "Admin dashboard management",
    ],
  },
  {
    slug: "it-support",
    title: "IT Support & Maintenance",
    shortTitle: "IT Support",
    tagline: "Keep your systems secure, updated, and running",
    description:
      "We provide ongoing technical support and maintenance to ensure your business systems stay secure, updated, and operating efficiently.",
    image: "/assets/services/thumbnails/IT%20Support.png",
    accent: "green",
    features: [
      "Technical troubleshooting",
      "System maintenance & updates",
      "Hardware & software support",
      "Network & internet assistance",
      "Virus protection & security checks",
      "Data backup & recovery",
      "Remote & on-site support",
    ],
  },
] as const;

export type Service = (typeof services)[number];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
