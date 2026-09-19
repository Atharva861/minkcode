import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - minkcode | Web Development, Social Media & Digital Marketing",
  description:
    "End-to-end web development, website redesign, social media management, digital marketing & growth, and ongoing maintenance & support from minkcode.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
