import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import Data from '../../data.json'
import { FormComment, Comment } from "../../interface/form-comment";

const commentData: FormComment = Data;

type props = {
    children: React.ReactNode
}

type CommentContextType = {
    Comment: Comment[] | null,
    setComment: Dispatch<SetStateAction<Comment[] | null>>
}

export const CommentContext = createContext({} as CommentContextType)


export function CommentProvider({ children }: props) {
    const [Comment, setComment] = useState<Comment[] | null>(null);

    useEffect(() => {
        setComment(commentData.comments)
    }, [])

    return <CommentContext.Provider value={{ Comment, setComment }}>{children}</CommentContext.Provider>
}