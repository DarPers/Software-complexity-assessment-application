import { useState } from "react";

export const useFetching = (callback) => {
    const [isProjectLoading, setIsProjectLoading] = useState(false);
    const [error, setError] = useState("");

    async function fetching () {
        try {
            setIsProjectLoading(true);
            console.log("66");
            await callback();
        } catch (e) {
            setError(e.message);
        } finally {
            setIsProjectLoading(false);
        }
    }

    return [fetching, error, isProjectLoading]
}