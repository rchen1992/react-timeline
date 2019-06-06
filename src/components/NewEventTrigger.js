import React from 'react';
import styled from 'styled-components';
import NewEventModal from './NewEventModal';
import { Button } from 'antd';
import { StateContext } from 'store';

function NewEventTrigger(props) {
    const [open, setOpen] = React.useState(false);

    function onClick() {
        setOpen(true);
    }

    function onClose() {
        setOpen(false);
    }

    return (
        <div>
            <Button type="primary" icon="plus" onClick={onClick}>
                New Event
            </Button>
            <NewEventModal open={open} onClose={onClose} />
        </div>
    );
}

export default NewEventTrigger;
