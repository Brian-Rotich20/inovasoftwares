"use client";

import React from "react";
import { WobbleCard } from "../ui/wobblecard";

export function TrustedBy() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-teal-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
            Inova Softwares powers digital transformation
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            From startups to enterprises, we build scalable, secure, and user-focused software solutions that help businesses grow faster.
          </p>
        </div>
        <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="Inova project demo"
          className="absolute -right-4 lg:-right-[10%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-indigo-900">
        <h2 className="max-w-80 text-left text-balance text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
          Trusted by clients worldwide
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Our solutions power mission-critical apps for businesses in fintech, health, logistics, and more — delivering reliability at scale.
        </p>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
            Partner with Inova Softwares to accelerate innovation
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Whether you need custom web platforms, mobile apps, or enterprise software, we combine cutting-edge tech with expert design to deliver outstanding results.
          </p>
        </div>
        <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="Inova teamwork demo"
          className="absolute -right-10 md:-right-[40%] lg:-right-[5%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
