export type CertificateItem = {
  id: string;
  title: string;
  date: string;
  image_url: string;
  href: string;
  credential_id: string;
};

export const certificateItem: CertificateItem[] = [
  {
    id: "p1",
    title: "CS50",
    date: "March 2025",
    image_url: "/certificates/cs50.png",
    href: "https://certificates.cs50.io/75daceaf-b362-445f-8291-183453d6c38a.pdf?size=letter",
    credential_id: "Credential ID: 75daceaf-b362-445f-8291-183453d6c38a",
  },
  {
    id: "p2",
    title: "CS50XEdx",
    date: "April 2025",
    image_url: "/certificates/edx.svg",
    href: "https://courses.edx.org/certificates/50e84e12888e486f9e1c2779a88a7eba?_gl=1*1h0y3d8*_gcl_au*MTU1NDQ3NDQ3MS4xNzQyMzQ4ODc1*_ga*Mjk1ODI4NzM2LjE3NDIzNDg4NzU.*_ga_D3KS4KMDT0*MTc0NDI2MTE5MC4xOS4xLjE3NDQyNjEyMDEuNDkuMC4w",
    credential_id: "Credential ID: 50e84e12888e486f9e1c2779a88a7eba",
  },
];
