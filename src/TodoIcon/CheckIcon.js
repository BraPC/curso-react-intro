import { TodoIcon } from "./";

function CheckIcon({complete,onCompleted}) {
    return (
        <TodoIcon
        type = "check"
        color={complete?"green":"gray"}
        onClick={onCompleted}
        />
    )
}

export {CheckIcon}