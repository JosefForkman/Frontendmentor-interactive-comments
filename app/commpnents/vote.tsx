import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type params = {
    score: number,
    setScore: React.Dispatch<React.SetStateAction<number>>
}


export default function Vote({ score, setScore }: params) {
    const add = () => {
        setScore(score += 1);
    }

    const remove = () => {
        if (score > 1) setScore(score -= 1);
    }

    return (
        <div className="vote bg-Neutral-Light-gray">
            <FontAwesomeIcon className="vote-icon text-Primary-Light-grayish-blue text-Primary-Moderate-blue-hover" icon={faPlus} onClick={add} />
            <span className="text-Primary-Moderate-blue">{score}</span>
            <FontAwesomeIcon className="vote-icon text-Primary-Light-grayish-blue text-Primary-Moderate-blue-hover" icon={faMinus} onClick={remove} />
        </div>
    )
}