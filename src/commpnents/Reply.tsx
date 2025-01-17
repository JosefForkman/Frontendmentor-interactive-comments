import Image from "next/image";

export default function () {

    return (
        <form className="reply bg-Neutral-White">
            <Image src="/avatars/image-juliusomo.webp" width={56} height={56} alt="" />
            <textarea
                name=""
                id=""
                className="text-Neutral-Dark-blue"
                placeholder="Add a comment...">
            </textarea>
            <button
                type="submit"
                className="btn bg-Primary-Moderate-blue text-Neutral-White bg-Primary-Light-grayish-blue-hover">
                Send
            </button>
        </form>
    )
}