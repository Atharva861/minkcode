import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | minkcode",
  description:
    "minkcode is a boutique digital studio that designs and builds websites, and helps them grow through social media and digital marketing.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
