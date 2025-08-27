export type ProjectItem = {
  id: string;
  title: string;
  name: string;
  description: string;
  image_url: string;
  href: string;
};

export const projectItems: ProjectItem[] = [
  {
    id: "p1",
    title: "yts-clone-sigma.vercel.app",
    name: "YTS",
    description: "YTS is a torrent site for high-quality movies.",
    image_url: "/timeline/yts_main.png",
    href: "https://yts-clone-sigma.vercel.app",
  },
  {
    id: "p2",
    title: "mini-store-weld.vercel.app",
    name: "Mini-store",
    description:
      "Mini-Store Commerce offers a sleek, user-friendly shopping experience with premium products and apparel.",
    image_url: "/timeline/mini_store_main.png",
    href: "https://mini-store-weld.vercel.app",
  },
  {
    id: "p3",
    title: "myanmar-postal-code-seven.vercel.app",
    name: "PostalCode",
    description:
      "Myanmar Postal Code helps users quickly find accurate postal codes by area.",
    image_url: "/timeline/postal_code_main.png",
    href: "https://myanmar-postal-code-seven.vercel.app",
  },
];
