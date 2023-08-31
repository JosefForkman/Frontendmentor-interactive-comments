import { createContext, useState } from "react";

type DialogContextProviderProps = {
    children: React.ReactNode
}


type DialogContextType = {
    CommentId: number | null,
    SetCommentId: React.Dispatch<React.SetStateAction<number | null>>
    Active: boolean,
    SetActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const DialogContext = createContext({} as DialogContextType);

export function DialogContextProvider({ children }: DialogContextProviderProps) {
    const [CommentId, SetCommentId] = useState<number | null>(null)
    const [Active, SetActive] = useState(false)

    return <DialogContext.Provider value={{ CommentId, SetCommentId, Active, SetActive }}> {children} </DialogContext.Provider>
}