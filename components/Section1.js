import Image from "next/image";
import React from "react";
import videoPlayer from "../assets/videos/videoPlayer.jpg";
function Section1() {
  return (
    <section className=" relative -z-10">
      <div className="flex sm:flex-row  items-center flex-col   ">
        {/* paragraph */}
        <div className="basic-1/2 mt-5 ml-8 p-8  ">
          <h1 className="font-heading-font text-3xl font-bold text-left font-mono		">
            Muhammad Abdullah , Awaiz Liqiat , Sajid Shaikh
          </h1>
          <p className="mt-4 font-mono	">The new #1 Solana NFT Community </p>
          <p className="mt-2">
            GEMC is a private members collective of 10,000 dedicated NFTs.
            Created by our famous artist! GEMC is doing Epic stuff for the NFT
            community.
          </p>
          <p className="mt-3 font-mono">
            We are trying something different bringing Modern Digital Art to the
            NFT world.
          </p>
        </div>

        {/* video */}
        <div className="basic-1/2 flex-nowrap p-10  ">
          <Image
            className="   aspect-auto  rounded-3xl"
            src={videoPlayer}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Section1;
