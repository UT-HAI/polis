import { useSelector, useDispatch } from "react-redux"
import { increment, selectCount } from "./counterSlice"

export default function Counter() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()

    return (
        <button
            onClick={() => dispatch(increment())}>
            Hello There! {count}
        </button>
    )
}