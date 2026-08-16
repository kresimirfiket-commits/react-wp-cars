import { createContext, useContext, useRef } from "react";

const LoadingContext = createContext(null)

export function LoadingProvider({ children }) {
    const loadingBarRef = useRef(null)

    const startLoading = () => loadingBarRef.current?.continuousStart()
    const completeLoading = () => loadingBarRef.current?.complete()

    const value = { loadingBarRef, startLoading, completeLoading }

    return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
}

export function useLoading() {
    const ctx = useContext(LoadingContext)
    if (!ctx) throw new Error('useLoading must be used within a LoadingProvider')
    return ctx
}