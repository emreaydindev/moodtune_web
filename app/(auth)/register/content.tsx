"use client";

import { Container, Theme, useTheme } from "@mui/material";
import { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";

export default function Content() {

    const theme = useTheme();

    const [step, setStep] = useState(1);

    const [userData, setUserData] = useState({
        "name": "",
        "email": "",
        "password": "",
        "favoriteGenres": [],
        "favoritePlatforms": [],
        "location": {
            "lat": null,
            "lng": null
        }
    })

    function renderStep() {
        switch (step) {
            case 1:
                return <Step1 theme={theme} changeStep={changeStep} userState={userData} setUserState={setUserData} />
            case 2:
                return <Step2 changeStep={changeStep} userState={userData} setUserState={setUserData} />
            case 3:
                return <Step3 changeStep={changeStep} userState={userData} setUserState={setUserData} />
            default:
                return <Step4 changeStep={changeStep} userState={userData} setUserState={setUserData} />
        }
    }

    const changeStep = (stepSize: number) => {
        const newStepSize = step + stepSize;
        if (document.getElementById("logo")) {
            if (newStepSize > 1) {
                document.getElementById("logo-container")!.style.display = "none";
            } else {
                document.getElementById("logo-container")!.style.display = "block";
            }
        }
        setStep(newStepSize);
    }

    return (
        <Container className="w-full" maxWidth="xs" disableGutters>
            {renderStep()}
        </Container>
    );
}