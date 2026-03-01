"use client";
import React, { createContext, useContext, useState, useCallback } from "react";

const WillContext = createContext(null);

// Step names in order
export const STEPS = [
    "testator",
    "executor",
    "spouse",
    "beneficiaries",
    "assets",
    "liabilities",
    "gifts",
    "residual",
    "funeral",
    "witnesses",
    "review",
];

// WillProvider — holds all step data for the will creation flow
export function WillProvider({ children }) {
    const [savedSteps, setSavedSteps] = useState({});
    const [willLocation, setWillLocation] = useState("England");

    const saveStep = useCallback((stepName, data) => {
        setSavedSteps((prev) => ({ ...prev, [stepName]: data }));
    }, []);
    const skipStep = useCallback((stepName) => {
        setSavedSteps((prev) => ({ ...prev, [stepName]: null }));
    }, []);

    const getStepData = useCallback(
        (stepName) => savedSteps[stepName],
        [savedSteps]
    );
    const isSkipped = useCallback(
        (stepName) => savedSteps[stepName] === null,
        [savedSteps]
    );

    const isSaved = useCallback(
        (stepName) =>
            savedSteps[stepName] !== undefined && savedSteps[stepName] !== null,
        [savedSteps]
    );

    return (
        <WillContext.Provider
            value={{
                savedSteps,
                willLocation,
                setWillLocation,
                saveStep,
                skipStep,
                getStepData,
                isSkipped,
                isSaved,
            }}
        >
            {children}
        </WillContext.Provider>
    );
}

export function useWill() {
    const ctx = useContext(WillContext);
    if (!ctx) throw new Error("useWill must be used within WillProvider");
    return ctx;
}

export default WillContext;
