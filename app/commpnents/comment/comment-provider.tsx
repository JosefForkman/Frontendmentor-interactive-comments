import { createContext, useState } from "react";
import Data from '../../data.json'
import { FormComment, Comment } from "@/app/interface/form-comment";

const commentData: FormComment = Data;

type props = {
    children: React.ReactNode
}

type CommentContextType = {
    Comment: Comment[] | null,
    setComment: React.Dispatch<React.SetStateAction<Comment[] | null>>
}

export const CommentContext = createContext({} as CommentContextType)


export function CommentProvider({ children }: props) {
    const [Comment, setComment] = useState<Comment[] | null>(commentData.comments)

    return <CommentContext.Provider value={{ Comment, setComment }}>{children}</CommentContext.Provider>
}