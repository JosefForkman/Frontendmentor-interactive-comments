import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Vote({score}: {score:number }) {
    return (
        <div className="vote bg-Neutral-Light-gray">
            <FontAwesomeIcon className="vote-icon text-Primary-Light-grayish-blue text-Primary-Moderate-blue-hover" icon={faPlus} />
            <span className="text-Primary-Moderate-blue">{score}</span>
            <FontAwesomeIcon className="vote-icon text-Primary-Light-grayish-blue text-Primary-Moderate-blue-hover" icon={faMinus} />
        </div>
    )
}