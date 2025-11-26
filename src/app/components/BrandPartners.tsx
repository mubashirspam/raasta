"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import CurvedLoop from "./CurvedLoop";

export default function BrandPartners() {
  const companiesLogo = [
    {
      name: "Framer",
      logo: "/companies-logo/framer.svg",
    },
    {
      name: "Huawei",
      logo: "/companies-logo/huawei.svg",
    },
    {
      name: "Instagram",
      logo: "/companies-logo/instagram.svg",
    },
    {
      name: "Microsoft",
      logo: "/companies-logo/microsoft.svg",
    },
    {
      name: "Walmart",
      logo: "/companies-logo/walmart.svg",
    },
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <h3 className="text-base text-center text-gray-400 mb-8 font-medium uppercase tracking-widest">
        Trusted by leading developers
      </h3>

      <div className="relative mb-12">
        <Marquee
          className="max-w-5xl mx-auto"
          gradient={true}
          speed={25}
          gradientColor={"#000"}
        >
          <div className="flex items-center justify-center">
            {[...companiesLogo, ...companiesLogo].map((company, index) => (
              <Image
                key={index}
                className="mx-11"
                src={company.logo}
                alt={company.name}
                width={100}
                height={100}
              />
            ))}
          </div>
        </Marquee>
      </div>

      {/* Curved Text Animation */}
      <CurvedLoop
        marqueeText="Luxury Properties ✦ Premium Real Estate ✦ Dubai Investment ✦ Off-Plan Projects ✦"
        speed={2.5}
        curveAmount={350}
        direction="left"
        interactive={true}
        className="fill-white"
      />
    </section>
  );
}
