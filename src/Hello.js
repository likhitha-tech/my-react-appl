import { useState } from "react";

function Hello()
{
    const[movie,setMovie]=useState({
        mname:"pushpa",
        mhero:"AA",
        mtkcost:"800"
    });
return(

    <p>Movie name is{movie.mname}and hero of movie is{movie.mhero}
    and ticket cost is{movie.mtkcost}
    </p>

);
}
export default Hello;