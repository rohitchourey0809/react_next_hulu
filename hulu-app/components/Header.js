import Image from "next/image";
import React from "react";
import huluimage from "../Images/hulu-icon.png";
import HeaderItem from "./HeaderItem";
// import { BeakerIcon,HomeIcon } from '@heroicons/react/24/solid'
import { HomeIcon,BadgeCheckIcon,LightningBoltIcon,SearchIcon,UserIcon,CollectionIcon } from "@heroicons/react/outline";
const Header = () => {
  return (
    <div >
      <header style={{ color: "GOLD",display:"flex", flexDirection: "row",border:"1px solid green" ,justifyContent:"space-evenly" ,backgroundColor:"black"}}>
        <div>
          <HeaderItem title="HOME" Icon={HomeIcon} />
        </div>
        <div>
          <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        </div>
        <div>
          <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        </div>
        <div>
          <HeaderItem title="SEARCH" Icon={SearchIcon} />
        </div>
        <div>
          <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        </div>
        <div>
          <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        </div>
       <div>
       <Image
          src={huluimage}
          className="object-contain"
          height={100}
          width={100}
        />
       </div>
      </header>
    </div>
  );
};

export default Header;
