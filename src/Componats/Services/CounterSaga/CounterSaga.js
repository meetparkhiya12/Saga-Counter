const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* CountAsync(){
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}


export function* watcherCount(){
    yield takeEvery('INCREMENT_ASYNC', CountAsync)
}

export default CountAsync;

