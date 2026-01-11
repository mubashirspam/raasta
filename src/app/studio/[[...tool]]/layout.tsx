export const metadata = {
  title: "Raasta Realty CMS",
  description: "Content management system for Raasta Realty",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
