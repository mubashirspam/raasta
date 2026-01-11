export const metadata = {
  title: "Raasta Realty CMS",
  description: "Content management system for Raasta Realty",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div style={{ margin: 0, height: "100vh" }}>{children}</div>;
}
