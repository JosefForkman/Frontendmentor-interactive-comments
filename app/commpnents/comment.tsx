import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faReply, faTrash } from "@fortawesome/free-solid-svg-icons";
import Vote from "./vote";
import { Comment, Reply } from "../interface/form-comment";

export default function ({ comment }: { comment: Comment | Reply }) {
    
    return (
        <div className="comment bg-Neutral-White">
            <div className="header">
                <div className="left-side">
                    <Image src={comment.user.image.webp} width={64} height={64} alt="" />
                    <b className="text-Neutral-Dark-blue">{comment.user.username}</b>
                    <span className="bg-Primary-Moderate-blue text-Neutral-White">you</span>
                    <p className="text-Neutral-Dark-blue">{comment.createdAt}</p>
                </div>
                <div className="right-side">
                    <button className="btn-icon text-Primary-Soft-Red text-Primary-Pale-red-hover">
                        <FontAwesomeIcon icon={faTrash} />
                        <p>Delete</p>
                    </button>
                    <button className="btn-icon text-Primary-Moderate-blue text-Primary-Light-grayish-blue-hover">
                        <FontAwesomeIcon icon={faPen} />
                        <p>Edit</p>
                    </button>
                    <button className="btn-icon text-Primary-Moderate-blue text-Primary-Light-grayish-blue-hover">
                        <FontAwesomeIcon icon={faReply} />
                        <p>Reply</p>
                    </button>
                </div>
            </div>
            <div className="body text-Neutral-Grayish-Blue">
                <p>{comment.content}</p>
            </div>
            <Vote score={comment.score} />
        </div>
    )
}