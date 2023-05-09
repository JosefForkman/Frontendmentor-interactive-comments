import Comment from './commpnents/comment';
import './scss/main.scss';
import Data from './data.json'
import { FormComment } from './interface/form-comment';
import Reply from './commpnents/Reply';

export default function Home() {
  const commentData: FormComment = Data

  return (
    <>
      <main>
        <h1>Comments works ✨😎</h1>
        <div className='commentsContainer'>
          {
            commentData.comments.map(comment => {
              return (
                <>
                  <Comment key={comment.id} comment={comment} />
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
        </div>
      </main>
    </>
  )
}
