"use client"

import { useContext, useEffect, KeyboardEvent, useRef } from "react";
import { DialogContext } from "./dialogContext";
import { CommentContext } from "../comment/comment-provider";

export default function () {
    const { Active, SetActive } = useContext(DialogContext);
    const { Comment, setComment } = useContext(CommentContext);

    // const dialogRef = useRef<null | HTMLDialogElement>(null)
    const dialogRef = useRef<null | HTMLDialogElement>(null)

    useEffect(() => {
        if (Active) {
            show()
        }
    }, [Active])

    function show() {
        const dialog = dialogRef.current;

        if (dialog) {
            dialog.showModal()
            dialog.classList.add('active');
        }
    }

    function close() {
        const dialog = dialogRef.current;

        SetActive(false)

        if (dialog) {
            dialog.close();
            dialog.classList.remove('active');
        }
    }

    function keyEvent(event: KeyboardEvent<HTMLDialogElement>) {
        const dialog = event.currentTarget;

        if (event.key == "Escape") {
            SetActive(false)

            if (dialog) {
                dialog.close();
                dialog.classList.remove('active');
            }
        }
    }


    return (
        <dialog ref={dialogRef} className="alert-box bg-Neutral-White" onKeyDown={keyEvent}>
            <h2>Delete comment</h2>
            <p>Are you sure to delete this comment? This will remove the comment and can't be undone.</p>
            <div className="btn-container text-Primary-Moderate-blue-focus-">
                <button
                    className='btn bg-Neutral-Grayish-Blue text-Neutral-White bg-Neutral-Light-gray-hover text-Neutral-Grayish-Blue-hover'
                    onClick={close}
                >
                    No, cancel
                </button>
                <button
                    className='btn bg-Primary-Soft-Red text-Neutral-White bg-Primary-Pale-red-hover'
                >
                    Yes, delete
                </button>
            </div>
        </dialog>
    )
}