// import React from "react";
// const nav = () => {
//     return (
//         <>
//             <div>
//                 <a href="/"><li>about</li>about</a>
//                 <a href="/"><li>home</li></a>
//                 <a href="/"><li>contact</li></a>
//             </div>
//         </>
//     )
// };
// export default nav

import React from "react";

const Nav: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/home">Home</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Nav;
