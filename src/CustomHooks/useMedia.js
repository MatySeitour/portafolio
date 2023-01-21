import { useState } from "react";
import { useEffect } from "react";
import { useLayoutEffect } from "react";

function useMedia(query) {
    const mql = window.matchMedia(query)
    const [matches, setMatches] = useState(mql.matches)

    const canUseOM = () => !!(typeof window !== "undefined" && window.document && window.document.createElement);

    const useSafeLayoutEffect = canUseOM() ? useLayoutEffect : useEffect;

    const handler = (e) => {
        setMatches(mql.matches)
    }

    useSafeLayoutEffect(() => {
        mql.addEventListener("change", handler)
        return () => mql.removeEventListener("change", handler)

    }, [])

    return matches;
}

export { useMedia }