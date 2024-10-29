import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "../Styles/FriendInteraction.css";

function FriendInteraction({ name, contents, end }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {

    }, [])

    const handleClick = () => {
        setCurrent(current + 1);
    }

    return (
        <div>
            <motion.div 
                animate={{ y: -200 }} 
                transition={{ duration: 2, ease: "linear" }}>
                    <div className="InteractionModal">
                        <h3>
                            {contents[current]}
                        </h3>
                        {current < (contents.length - 1) ? 
                            <button onClick={handleClick}>
                                Next
                            </button>
                            :
                            <button onClick={end}>
                                End
                            </button>
                        }                        
                    </div>
            </motion.div>
        </div>
    );
}

export default FriendInteraction;