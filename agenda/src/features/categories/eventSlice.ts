import { createSlice } from "@reduxjs/toolkit";

interface Event {
    "id": string;
    "name": string;
    "description": null | string;
    "is_active": boolean;
    "deleted_at": null | string;
    "created_at": string;
    "updated_at": string; 
}

const event : Event = {
    "id": "uuid",
    "name": "name",
    "description": "description",
    "is_active": true,
    "deleted_at": null,
    "created_at": "2022-08-15T10:58:09+0800",
    "updated_at": "2022-08-15T10:58:09+0800",
}


export const initialState = [
    event,
    { ...event, id: "uuid2", name: "name2"},
    { ...event, id: "uuid3", name: "name3"},
    { ...event, id: "uuid4", name: "name4"},
]

const eventsSlice = createSlice({
    name: "events",
    initialState: initialState,
    reducers: {
        createEvents(state, action) {},
        updateEvents(state, action) {},
        deleteEvents(state, action) {},
    },
})

export default eventsSlice.reducer