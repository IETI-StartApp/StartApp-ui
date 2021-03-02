import React, { useState,useCallback } from 'react'
import { ProgressBar } from '../../components/Progressbar/ProgressBar'
import { makeStyles, Fab } from '@material-ui/core';
import steps from './steps';
import {ProjectDescription} from '../../components/ProjectForm/ProjectDescription';
import {ProjectFinancing} from '../../components/ProjectForm/ProjectFinancing';
import {ProjectPresentation} from '../../components/ProjectForm/ProjectPresentation';
import {useForm} from "../../hooks/useForm";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {ThemeProvider} from "@material-ui/core/styles";
import globalTheme from "../../globalTheme";

const useStyles = makeStyles({
    root: {
        '@media (min-width:480px)': {
            width: '70%'
        },
        '@media (min-width:600px)': {
            width: '70%'
        },
        '@media (min-width:801px)': {
            width: '60%'
        },
        '@media (min-width:1025px)': {
            width: '50%'
        },
        margin: "4rem auto",
    }
});

export const RegisterProjectPage = () => {
    const [activeStep, setActiveStep] = useState(0);
    const handleNext = useCallback(() => {
        setActiveStep(prevActiveStep => prevActiveStep + 1)}
    );
    const handlePrev = () => {
        setActiveStep(prevActiveStep => prevActiveStep -1)
    }
    const [inputValues,handleInputChange] = useForm({
        projectName: '',
        projectDescription: '',
        investment: 0,
        minInvestment: 0,
    });
    const [dueDate,setDueDate] = useState(new Date());
    const handleDateChange = useCallback((date) => setDueDate(date));
    const handleChange = useCallback(handleInputChange);
    const classes = useStyles();
    const dueDateString = dueDate.toDateString();
    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <ProjectDescription
                        formValues={inputValues}
                        handleChange={handleChange}
                        handleNext={handleNext}/>;
            case 1:
                return <ProjectFinancing
                        formValues={inputValues}
                        handleChange={handleChange}
                        handleNext={handleNext}
                        zone={{zone:"co-CO",region:"COP"}}
                        handleDateChange = {handleDateChange}
                        />;
            case 2:
                return <ProjectPresentation/>;
            default:
                return "Nada para hacer" + dueDateString;
        }
    }
    return (
        <ThemeProvider theme={globalTheme}>
            <div className={classes.root}>
                <ProgressBar activeStep={activeStep}/>
                {activeStep === steps.length ? "Finished": (
                        <>
                            {getStepContent(activeStep)}
                        </>
                )}
                {activeStep !== 0 && activeStep < steps.length &&(
                    <>
                        <Fab size="small" color="primary" aria-label="edit" onClick={handlePrev}>
                            <ArrowBackIcon />
                        </Fab>
                    </>
                )}
            </div>
        </ThemeProvider>
    )
}
