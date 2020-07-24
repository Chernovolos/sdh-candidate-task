import React from "react";

export default ((show) => {

    return (
        show ?
            <div>
                <h2>Loading</h2>
            </div>:
            null
    )
})