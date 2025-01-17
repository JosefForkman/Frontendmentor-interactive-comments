import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            <button onClick={add}>
                <FontAwesomeIcon className="vote-icon text-Primary-Light-grayish-blue text-Primary-Moderate-blue-hover text-Primary-Moderate-blue-focus" icon={faPlus} />
            </button>
            <span className="text-Primary-Moderate-blue">{score}</span>
            <button onClick={remove}>
                <FontAwesomeIcon className="vote-icon text-Primary-Light-grayish-blue text-Primary-Moderate-blue-hover" icon={faMinus} />
            </button>
        </div>
    )
}