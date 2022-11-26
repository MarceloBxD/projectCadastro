import React, { createContext, useContext, useEffect, useState, useRef } from 'react'

const AppContext = createContext({})

export interface iContext{
    name: string
    setName: React.Dispatch<React.SetStateAction<string>>
    isFilled: boolean
    setIsFilled: React.Dispatch<React.SetStateAction<boolean>>
    email: string
    setEmail: React.Dispatch<React.SetStateAction<string>>
    password: string
    setPassword: React.Dispatch<React.SetStateAction<string>>
    showPassword: boolean
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>
    isLoading: boolean
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    confirmPassword: string
    setConfirmPassword: React.Dispatch<React.SetStateAction<string>>
    isDisable: boolean
    setIsDisable: React.Dispatch<React.SetStateAction<boolean>>
    userValid: boolean
    setUserValid: React.Dispatch<React.SetStateAction<boolean>>
}

export function AppProvider({ children }: any) {

    const [isFilled, setIsFilled] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [isDisable, setIsDisable] = useState<boolean>(true);
    const [userValid, setUserValid] = useState<boolean>(false);




    const value: iContext = {
        name,
        setName,
        isFilled,
        setIsFilled,
        email,
        setEmail,
        password,
        setPassword,
        showPassword,
        setShowPassword,
        isLoading, 
        setIsLoading,
        confirmPassword,
        setConfirmPassword,
        isDisable,
        setIsDisable,
        userValid,
        setUserValid,
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    return useContext(AppContext)
}
