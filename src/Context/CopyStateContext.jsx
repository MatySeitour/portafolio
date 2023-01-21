import { useState, createContext, useEffect } from "react";

const CopyContext = createContext({});

export function CopyContextProvider({ children }) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (copied === true) {
            setTimeout(function(){
                setCopied(false)
            }, 3000);
        }
    }, [copied])

    return (
        <CopyContext.Provider value={{ copied, setCopied }}>
            {children}
        </CopyContext.Provider>
    )

}

export default CopyContext;