"use client"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import Vote from "../vote";
import { Comment as IComment, Reply } from "../../interface/form-comment";
import { useContext, useEffect, useState } from "react";
import { DialogContext } from "../Dialog/dialogContext";


export default function Comment (props: { comment: IComment | Reply, index: number }) {
    const [comment, setComment] = useState<(IComment | Reply)>()
    const { SetCommentId, SetActive } = useContext(DialogContext)
    const [score, setScore] = useState(0);

    useEffect(() => {
        setComment(props.comment);
        setScore(props.comment.score)
    }, [props.comment])

    const deleteComment = () => {
        if (comment) {
            SetCommentId(comment.id);
            SetActive(true)
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
                    onClick={deleteComment}>
                    <FontAwesomeIcon icon={faTrash} />
                    <p>Delete</p>
                </button>
                <button className="btn-icon text-Primary-Moderate-blue text-Primary-Light-grayish-blue-hover">
                    <FontAwesomeIcon icon={faPen} />
                    <p>Edit</p>
                </button>

            </div>
            <div className="body text-Neutral-Grayish-Blue">
                <p>{comment.content}</p>
            </div>

            <Vote score={score} setScore={setScore} />
        </div>
    )
}