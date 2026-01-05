export const getImageUrl = (
  image: string | { asset?: { url: string } } | undefined
): string => {
  if (!image) {
    return "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop";
  }

  if (typeof image === "string") {
    return image;
  }

  if (image && typeof image === "object" && "asset" in image) {
    return (
      image.asset?.url ||
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
    );
  }

  return "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop";
};
