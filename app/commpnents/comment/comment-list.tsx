import { useContext } from "react";
import Reply from "../Reply";
import Comment from './comment';
import { CommentContext } from "./comment-provider";

export default function commentList() {
    const { Comment: Comments, setComment } = useContext(CommentContext);

    console.log(Comments);

    return (
        <>
            {
                Comments?.map(comment => {
                    return (
                        <div key={comment.id}>
                            <Comment  comment={comment} />
                            {comment.replies.length > 0 &&
                                <div className='comment-reply'>
                                    <div className="horizontal-line bg-Neutral-Light-gray"></div>
                                    {comment.replies.map(replie => {
                                        return <Comment key={replie.id} comment={replie} />
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