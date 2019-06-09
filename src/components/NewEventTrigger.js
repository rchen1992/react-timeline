import React from 'react';
import NewEventModal from './NewEventModal';
import { Button } from 'antd';
import { StateContext } from 'store';

function NewEventTrigger(props) {
    const [open, setOpen] = React.useState(false);
    const { onAddEvent } = React.useContext(StateContext);

    function onClick() {
        setOpen(true);
    }

    function onClose() {
        setOpen(false);
    }

    function onSubmit(event) {
        onAddEvent(event);
    }

    return (
        <div>
            <Button icon="plus" onClick={onClick}>
                New Event
            </Button>
            <NewEventModal open={open} onClose={onClose} onSubmit={onSubmit} />
        </div>
    );
}

export default NewEventTrigger;
