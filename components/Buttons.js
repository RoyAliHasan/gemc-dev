import Image from "next/image";
import React from "react";
import landmark from "../assets/images/Logomark.svg";
import discord from "../assets/images/discord.svg";
function Buttons() {
  return (
    <div className="flex  items-center justify-center mt-10">
      <button className="flex items-center justify-center   bg-gradient-to-r from-indigo-500 via-blue-500 to-blue-900 p-5 ml-8 rounded-2xl text-white text-xl">
        <Image className="mr-2" src={landmark} />
        MINTING SOON
      </button>
      <button className="flex items-center justify-center   bg-gradient-to-r from-indigo-500 via-blue-500 to-blue-900 p-5 ml-8 rounded-2xl text-white text-xl">
        <Image className="mr-2 text-white" src={discord} />
        JOIN OUR DISCORD
      </button>
    </div>
  );
}

export default Buttons;
