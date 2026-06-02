import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MasterClass Presentation",
  description: "Platform overview & demo presentation",
};

export default function PresentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ position: "fixed", inset: 0, overflow: "hidden" }}>
      {children}
    </div>
  );
}
