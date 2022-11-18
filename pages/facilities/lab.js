import React from "react";

export const getStaticProps = () => {
    //api call
    return {
        props : {footerstatus : true}
    }
}

const Lab = (props) => {
    return(
        <div>
            <h2>Lab</h2>
        </div>
    )
}

export default Lab;