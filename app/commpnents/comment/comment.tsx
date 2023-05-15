"use client"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faReply, faTrash } from "@fortawesome/free-solid-svg-icons";
import Vote from "../vote";
import { Comment, Reply } from "../../interface/form-comment";
import Dialog from "../dialog";
import { useEffect, useState } from "react";
import notFound from "@/app/not-found";


export default function (props: { comment: Comment | Reply }) {
    const [comment, setComment] = useState<(Comment | Reply)>()
    const [score, setScore] = useState(0);

    useEffect(() => {
        setComment(props.comment);
        setScore(props.comment.score)
    }, [])

    function show(e: any) {
        const dialog = document.querySelector('dialog');

        if (dialog) {
            dialog.showModal()
            dialog.classList.add('active');
        }
    }

    if (!comment) {
        return <h1>Not found</h1>
    }

    return (
        <div className="comment bg-Neutral-White">
            <div className="header">
                <div className="left-side">
                    <Image src={comment.user.image.webp} width={56} height={56} alt="" />
                    <b className="text-Neutral-Dark-blue">{comment?.user.username}</b>
                    <span className="bg-Primary-Moderate-blue text-Neutral-White">you</span>
                    <p className="text-Neutral-Dark-blue">{comment?.createdAt}</p>
                </div>
            </div>
            <div className="right-side">
                <button
                    className="btn-icon text-Primary-Soft-Red text-Primary-Pale-red-hover"
                    onClick={show}
                >
                    <FontAwesomeIcon icon={faTrash} onClick={show} />
                    <p>Delete</p>
                </button>
                <button className="btn-icon text-Primary-Moderate-blue text-Primary-Light-grayish-blue-hover">
                    <FontAwesomeIcon icon={faPen} />
                    <p>Edit</p>
                </button>
                {/* <button className="btn-icon text-Primary-Moderate-blue text-Primary-Light-grayish-blue-hover">
                    <FontAwesomeIcon icon={faReply} />
                    <p>Reply</p>
                </button> */}
            </div>
            <div className="body text-Neutral-Grayish-Blue">
                <p>{comment.content}</p>
            </div>

            <Vote score={score} setScore={setScore} />

            <Dialog comment={comment} />
        </div>
    )
}