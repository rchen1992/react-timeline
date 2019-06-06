import React from 'react';
import styled from 'styled-components';
import { Modal, Input, DatePicker } from 'antd';

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const Label = styled.label`
    display: block;
    margin-bottom: 6px;
    font-weight: bold;
`;

const Field = styled.div`
    margin-bottom: 10px;
`;

function NewEventModal(props) {
    return (
        <Modal
            title="New Event"
            visible={props.open}
            onOk={props.onClose}
            onCancel={props.onClose}
            okText="Submit"
        >
            <Field>
                <Label htmlFor="event-name-input">Event Description:</Label>
                <TextArea id="event-name-input" rows={2} placeholder="Enter event description" />
            </Field>
            <Field>
                <Label htmlFor="event-name-input">Event Dates:</Label>
                <RangePicker style={{ width: '100%' }} />
            </Field>
        </Modal>
    );
}

export default NewEventModal;
