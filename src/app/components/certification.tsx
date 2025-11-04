import React from "react";
import Image from "next/image";
import Link from "next/link";
import { certificateItem } from "../static/certification";
import { staticData } from "../static";

const Certification = () => {
  return (
    <>
      <div className="md:min-h-screen md:my-0 my-6">
        <h2 className="font-bold text-3xl ml-4 md:ml-0 md:text-center md:pt-12 pt-4">
          CERTIFICATES
        </h2>
        <div className="mx-4 md:mx-24 md:text-center my-6">
          {staticData.certificate_description}
        </div>

        <div className="md:py-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-24">
          {certificateItem.map((item) => {
            const credentialLabel = item.credential_id?.startsWith(
              "Credential ID"
            )
              ? item.credential_id
              : `Credential ID: ${item.credential_id}`;

            return (
              <Link
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.title} certificate`}
                className="block"
              >
                <div className="shadow-lg rounded-2xl p-4 sm:p-6 bg-white text-black h-full">
                  <div className="flex items-center gap-4">
                    <div className="shrink-0">
                      <Image
                        src={item.image_url}
                        alt={item.title}
                        width={90}
                        height={90}
                        className="rounded-lg object-contain"
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="text-lg font-semibold truncate">
                        {item.title}
                      </div>
                      <div className="text-xs text-neutral-600">
                        Issued {item.date}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-xs text-neutral-700 break-words">
                    {credentialLabel}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Certification;
