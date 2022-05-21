import { Input, useInput, Grid } from "@nextui-org/react";
import React from 'react'
import {useEffect} from 'react'
export const EmailInput = ({setEmail,email}) => {
    const { reset, bindings } = useInput('');

    const validateEmail = (email) => {
      return email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    };
    
  
    const helper = React.useMemo(() => {
      if (!email)
      
        return {
          text: "",
          color: "",
        };
      const isValid = validateEmail(email);
      return {
        text: isValid ? "Correct email" : "Enter a valid email",
        color: isValid ? "success" : "error",
      };
    }, [email]);

    return <Input
        {...bindings} 
        clearable
         shadow={false} 
        onClearClick={reset}
        status={helper.color}
        color={helper.color}
        helperColor={helper.color}
        helperText={helper.text}
        type="email"
        label="Emails"
        value={email}
        placeholder="Write an Email"
        onChange={(e)=> setEmail(e.target.value)}
    />
    
}