'use client';
import { CommentProvider } from '../commpnents/comment/comment-provider';
import CommentList from '../commpnents/comment/comment-list';
import './scss/main.scss';

export default function Home() {

    return (
        <>
            <main>
                <h1>Comments works ✨😎</h1>
                <div className='commentsContainer'>
                    <CommentProvider>
                        <CommentList />
                    </CommentProvider>
                </div>
            </main>
        </>
    )
}
