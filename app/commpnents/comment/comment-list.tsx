import { useContext } from "react";
import Reply from "../Reply";
import Comment from './comment';
import { CommentContext } from "./comment-provider";

export default function commentList() {
    const { Comment: Comments, setComment } = useContext(CommentContext);

    return (
        <>
            {
                Comments?.map((comment, index) => {
                    return (
                        <div key={comment.id}>
                            <Comment comment={comment} index={index} />
                            {comment.replies.length > 0 &&
                                <div className='comment-reply'>
                                    <div className="horizontal-line bg-Neutral-Light-gray"></div>
                                    {comment.replies.map((replie, index) => {
                                        return <Comment key={replie.id} comment={replie} index={index} />
                                    })}
                                </div>
                            }
                        </div>
                    )
                })
            }
            <Reply />
        </>
    )
}