import React from 'react'
import { cn } from '../lib/cn'

function Buttons({children, className}) {
  return (
    <button
      className={cn(
        "rounded-full text-deepJungleGreen  font-[500] font-workSans -tracking-[1%] leading-[18px]  hover:shadow-md shadow-[#53FFFC33]",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Buttons