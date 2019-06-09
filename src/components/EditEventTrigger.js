import React from 'react';
import NewEventModal from './NewEventModal';
import { StateContext } from 'store';

function EditEventTrigger(props) {
    const {
        editEventOpen,
        setEditEventOpen,
        editEvent,
        setEditEvent,
        onEditEvent,
    } = React.useContext(StateContext);

    function onClose() {
        setEditEventOpen(false);
    }

    function onSubmit(event) {
        onEditEvent(event);
        setEditEvent(null);
    }

    const eventProps = editEvent
        ? {
              id: editEvent.id,
              name: editEvent.name,
              color: editEvent.color,
              startDate: editEvent.startObj,
              endDate: editEvent.endObj,
          }
        : null;

    return (
        editEvent && (
            <NewEventModal
                key={editEvent && editEvent.id}
                editMode
                open={editEventOpen}
                onClose={onClose}
                onSubmit={onSubmit}
                {...eventProps}
            />
        )
    );
}

export default EditEventTrigger;
