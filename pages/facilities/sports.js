import React from "react";

export const getStaticProps = () => {
    //api call
    return {
        props : {footerstatus : true}
    }
}

const Sports = (props) => {
    return(
        <div>
            <h2>Sports</h2>
        </div>
    )
}

export default Sports;