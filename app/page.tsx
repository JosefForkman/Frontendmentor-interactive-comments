'use client';
import './scss/main.scss';
import { FormComment } from './interface/form-comment';
import Reply from './commpnents/Reply';
import { CommentProvider, CommentContext } from './commpnents/comment/comment-provider';
import Comment from './commpnents/comment/comment';
import { useContext } from 'react';

export default function Home() {

    // const [show, setShow] = useState<Function>()
    const comments = useContext(CommentContext)

    return (
        <>
            <main>
                <h1>Comments works ✨😎</h1>
                <div className='commentsContainer'>
                    <CommentProvider>
                        {
                            comments.map(comment => {
                                console.log(comment);

                                return (
                                    <>
                                        <Comment key={crypto.randomUUID()} comment={comment} />
                                        {comment.replies.length > 0 &&
                                            <div className='comment-reply'>
                                                <div className="horizontal-line bg-Neutral-Light-gray"></div>
                                                {comment.replies.map(replie => {
                                                    return <Comment key={replie.id} comment={replie} />
                                                })}
                                            </div>
                                        }
                                    </>
                                )
                            })
                        }
                        <Reply />

                    </CommentProvider>
                </div>
            </main>
        </>
    )
}
