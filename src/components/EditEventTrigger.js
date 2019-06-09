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
        onDeleteEvent,
    } = React.useContext(StateContext);

    function onClose() {
        setEditEventOpen(false);
    }

    function onSubmit(event) {
        onEditEvent(event);

        /**
         * We need to set the currently edited event back to null
         * or else re-opening the modal for the same event after a submit
         * will have stale data.
         *
         * We don't do this for onClose because that would cause a re-render
         * that will cut short the close animation.
         */
        setEditEvent(null);
    }

    function onDelete(eventId) {
        onDeleteEvent(eventId);
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
                onDelete={onDelete}
                {...eventProps}
            />
        )
    );
}

export default EditEventTrigger;
