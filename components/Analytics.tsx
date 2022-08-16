import React from "react";
import Image from 'next/image'

interface AnalyticsProps {}

export const Analytics: React.FC<AnalyticsProps> = ({}) => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        {/* <Image src='/assets/laptop' width={100} height={100}/> */}
      </div>
    </div>
  );
};
