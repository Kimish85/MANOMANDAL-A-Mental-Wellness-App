import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata = {
  title: "ManoMandal",
  description: "Culturally grounded emotional regulation platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}