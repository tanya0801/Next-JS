import React from "react";
import Image from "next/image";

const Logo = () => {
    return(
        <div className="col-2">
           <Image src="/nextJs_image.png" alt={"logo"} width={140} height={70} />
        </div>
    )
}

export default Logo;