import React from "react";

export const getStaticProps = () => {
    //api call
    return {
        props : {footerstatus : true}
    }
}

const Playground = (props) => {
    return(
        <div>
            <h2>Playground</h2>
        </div>
    )
}

export default Playground;