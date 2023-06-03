"use client"
import { Comment, Reply } from "../interface/form-comment";


export default function ({ comment }: { comment: Comment | Reply }) {
    // const dialogElement = document.querySelector('dialog')
    function show(e: any) {
        const dialog = document.querySelector('dialog');

        if (dialog) {
            dialog.showModal()
            dialog.classList.add('active');
        }
    }

    function close(e: any) {
        const dialog = document.querySelector('dialog');

        if (dialog) {
            dialog.close();
            dialog.classList.remove('active');
        }
    }

    function confirm() {
        if (comment) {
            console.log(comment.user.username);
        }
    }


    return (
        <dialog className="alert-box bg-Neutral-White">
            <h2>Delete comment</h2>
            {comment.user.username}
            <p>Are you sure to delete this comment? This will remove the comment and can't be undone.</p>
            <div className="btn-container text-Primary-Moderate-blue-focus-">
                <button
                    className='btn bg-Neutral-Grayish-Blue text-Neutral-White bg-Neutral-Light-gray-hover text-Neutral-Grayish-Blue-hover'
                    onClick={close}>
                    No, cancel
                </button>
                <button
                    className='btn bg-Primary-Soft-Red text-Neutral-White bg-Primary-Pale-red-hover'
                    onClick={confirm}
                >
                    Yes, delete
                </button>
            </div>
        </dialog>
    )
}