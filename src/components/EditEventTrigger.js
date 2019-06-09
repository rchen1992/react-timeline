import React from 'react';
import NewEventModal from './NewEventModal';
import { StateContext } from 'store';

function EditEventTrigger(props) {
    const { editEventOpen, setEditEventOpen, editEvent } = React.useContext(StateContext);

    function onClose() {
        setEditEventOpen(false);
    }

    function onSubmit(event) {
        console.log('submit edit');
    }

    return (
        editEvent && (
            <NewEventModal
                key={editEvent.id}
                editMode
                name={editEvent.name}
                color={editEvent.color}
                startDate={editEvent.startObj}
                endDate={editEvent.endObj}
                open={editEventOpen}
                onClose={onClose}
                onSubmit={onSubmit}
            />
        )
    );
}

export default EditEventTrigger;
