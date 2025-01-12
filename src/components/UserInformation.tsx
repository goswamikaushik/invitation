import Image from "next/image";
import { notFound, useSearchParams } from "next/navigation";
import React from "react";

const UserInformation = () => {
  const searchParams = useSearchParams();

  const isUrlQuery = searchParams?.has("i");
  const imageName = searchParams.get("i");
  const generateImageUrl = `https://dcwckzrntxzqfshnemgj.supabase.co/storage/v1/object/public/invitation_images/${imageName}`;
  if (!isUrlQuery || !imageName) notFound();
  return (
    <>
      <div className="flex justify-center ">
        <div className=" w-40 h-40 relative bg-black rounded-full">
          <Image
            src={generateImageUrl}
            alt="Inviter's photo"
            fill
            quality={100}
            className="rounded-full object-contain"
          />
        </div>
      </div>
      <p className="text-base text-center font-bold mt-4 mb-4">
        &#10024; આ શુભ પ્રસંગમાં આવો જોડાઓ! &#10024;
      </p>
      <p className="text-base text-center font-bold mb-4">
        હું આ સમૂહ લગ્નમાં જઈ રહ્યો છું, શું તમે પણ આવશો?
      </p>
    </>
  );
};

export default UserInformation;
