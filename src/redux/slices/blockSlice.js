import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    blockAbout: null,
    blockRoadMap: null,
    blockBirdsCoin: null,
    blockBasicUtilities: null,
    blockProcess: null,
    blockTeam: null,
    blockFaq: null,
}

const blockSlice = createSlice({
    name: 'block',
    initialState,
    reducers: {
        setBlockAbout(state, action) {
            console.log(action.payload);
            state.blockAbout = action.payload
        },
        setBlockRoadMap(state, action) {
            state.blockRoadMap = action.payload
        },
        setBlockBirdsCoin(state, action) {
            state.blockBirdsCoin = action.payload
        },
        setBlockBasicUtilities(state, action) {
            state.blockBasicUtilities = action.payload
        },
        setBlockProcess(state, action) {
            state.blockProcess = action.payload
        },
        setBlockTeam(state, action) {
            state.blockTeam = action.payload
        },
        setBlockFaq(state, action) {
            state.blockFaq = action.payload
        },
    }
})

export const {
    setBlockAbout,
    setBlockRoadMap,
    setBlockBirdsCoin,
    setBlockBasicUtilities,
    setBlockProcess,
    setBlockTeam,
    setBlockFaq
} = blockSlice.actions

export default blockSlice.reducer