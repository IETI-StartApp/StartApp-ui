import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import "./styles.js";
import {TextField,  Grid} from '@material-ui/core';
import {ButtonDesign, FormDesign, ErrorDesign, BackDesign} from "./styles";

const useStyles = makeStyles((theme) => ({
    paper: {
      width: "100%",
      height: "100%",
      overflowY: "auto"
    
    },
    root: {
        overflowY: "auto" 
    },
    formContainer: {
        position: "relative",
        '@media (min-width:780px)': {
            width: '28.125rem'
        },
        height: "auto",
        padding: "6rem"
    },
    inputField: {
        width: "100%",
        margin: "1rem 0",
    },
    Magin:{
        marginTop: "25px"
    }
    
  }));

export const Register = () => {
    const [values,setValues] = useState({
        username: "",
        email:"",
        password: "",
        password2: ""
    })
    const handleChange = e =>{
        setValues({
            ...values,[e.target.name]: e.target.value
        })
    }
    const [errors,setErrors] = useState({
    })
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleSubmit = e =>{
        e.preventDefault();
        setErrors(validationForm(values));
        setIsSubmitting(true)
        if (Object.keys(errors) < 1 && isSubmitting){
           console.log("hola")
        }
       
    }
    
	   
    
    function validationForm(valor){
        
        let errores= {}
        if (!valor.username.trim()){
            errores.username = "Required"
            setIsSubmitting(false)
        }
        if (!valor.email) {
            errores.email = 'Required';
            setIsSubmitting(false)
          } else if (!/\S+@\S+\.\S+/.test(valor.email)) {
            errores.email = 'Email address is invalid';
            setIsSubmitting(false)
        }
        if (!valor.password){
            errores.password ="Required"
            setIsSubmitting(false)
        }else if (valor.password.length < 6){
            errores.password ="Needs at least 6 characters "
            setIsSubmitting(false)
        }
        if (!valor.password2){
            errores.password2 ="Required"
            setIsSubmitting(false)
        }else if(valor.password !== valor.password2){
            errores.password2 ="Do not match"
            setIsSubmitting(false)
        }
    
        return errores; 
    }
    const classes =  useStyles();
    return (
       
        <Grid container direction="row" justify="flex-end" alignItems="stretch" className={classes.root}>
            <Grid item xs={6} >
            <img className={classes.paper} alt="" src="https://media.discordapp.net/attachments/745690056441987075/813964535899619328/image2.png?width=519&height=662"/>   
                
            </Grid>
            <Grid item xs={6}>
            <Grid container className={classes.Magin} direction="row-reverse" justify="space-around" alignItems="center"  >
            <Grid item xs={8}>  
            </Grid>
                <BackDesign href='#'> Back</BackDesign>
            </Grid>
            <div className={classes.formContainer}>
            <FormDesign className = "form"  onSubmit={handleSubmit}>
                
                
                <h1>Completa tu perfil </h1>
                <h3>A efectos de la regulación del sector, se requieren los datos de su perfil</h3>
                
                <div>
                <TextField className={classes.inputField} id="outlined-basic" label="Nombre" name="username" type="text" value={values.username} onChange={handleChange}/>
                    {errors.username && <ErrorDesign>{errors.username}</ErrorDesign>}
               
                </div>
               
                <div className="inputs">
                    <TextField  className={classes.inputField} id="standard-basic" label="Email" type="email" name="email"   value={values.email} onChange={handleChange}/>
                        {errors.email && <ErrorDesign>{errors.email}</ErrorDesign>}
                </div> 
                <div className="inputs">
                    <TextField  className={classes.inputField} id="standard-basic" label="Password" type="password" name="password" value={values.password} onChange={handleChange}/>
                        {errors.password && <ErrorDesign>{errors.password}</ErrorDesign>}
                </div> 
                <div className="inputs">
                    <TextField  className={classes.inputField} id="standard-basic" label="Confirmed password" type="password" name="password2" value={values.password2} onChange={handleChange}/>
                        {errors.password2 && <ErrorDesign>{errors.password2}</ErrorDesign>}
                </div>  
            
                
                <ButtonDesign className="button" type="submit">
                    Sign Up
                </ButtonDesign>
                
            </FormDesign>
           
            </div>
            
            </Grid>
        </Grid>
    )
}
export default Register
