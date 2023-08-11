import { INCREMENT } from "../Allaction"


const initiale = {
count :0
}

const Countreducer = (state = initiale, action) => {


    switch (action.type) {
        case INCREMENT:
            return (
                {
                    ...state,
                    count : state.count + 1
                }

            )
     
        default:
            return state

    }


}

export default Countreducer
