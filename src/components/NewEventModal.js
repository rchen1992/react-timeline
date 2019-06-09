import React from 'react';
import styled from 'styled-components';
import { Modal, Input, DatePicker, Form, Button } from 'antd';
import { CirclePicker } from 'react-color';
import { EVENT_DATE_FORMAT } from 'config';
import eventColors from 'style/eventColors';

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const colors = Object.values(eventColors);

const StyledDeleteButton = styled(Button)`
    float: left;
`;

function NewEventModal(props) {
    const [color, setColor] = React.useState(props.color || colors[0]);
    const [name, setName] = React.useState(props.name || '');
    const [startDate, setStartDate] = React.useState(props.startDate || null);
    const [endDate, setEndDate] = React.useState(props.endDate || null);
    const [submitted, setSubmitted] = React.useState(false);

    function onColorChange(color) {
        setColor(color.hex);
    }

    function onNameChange(e) {
        setName(e.target.value);
    }

    function onDateChange(dates) {
        setStartDate(dates[0]);
        setEndDate(dates[1]);
    }

    function onClose() {
        setColor(props.color || colors[0]);
        setName(props.name || '');
        setStartDate(props.startDate || null);
        setEndDate(props.endDate || null);
        setSubmitted(false);

        props.onClose();
    }

    function onSubmit() {
        setSubmitted(true);

        if (!name || !startDate || !endDate || startDate.isSame(endDate)) {
            return;
        }

        const payload = {
            color,
            name,
            start: startDate.format(EVENT_DATE_FORMAT),
            end: endDate.format(EVENT_DATE_FORMAT),
            startObj: startDate,
            endObj: endDate,
        };

        if (props.editMode) {
            payload.id = props.id;
        }

        props.onSubmit(payload);

        onClose();
    }

    function onDelete() {
        if (props.onDelete) {
            props.onDelete(props.id);
        }

        onClose();
    }

    let footerElements = [
        <Button key="cancel" onClick={onClose}>
            Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={onSubmit}>
            Submit
        </Button>,
    ];

    if (props.editMode) {
        footerElements = [
            <StyledDeleteButton key="delete-event" type="danger" onClick={onDelete}>
                Delete Event
            </StyledDeleteButton>,
            ...footerElements,
        ];
    }

    return (
        <Modal
            title={props.editMode ? 'Edit Event' : 'New Event'}
            visible={props.open}
            onOk={onSubmit}
            onCancel={onClose}
            footer={footerElements}
        >
            <Form>
                <Form.Item label="Event Name" validateStatus={submitted && !name ? 'error' : null}>
                    <TextArea id="event-name-input" rows={2} value={name} onChange={onNameChange} />
                </Form.Item>
                <Form.Item
                    label="Event Dates"
                    validateStatus={
                        submitted && (!startDate || !endDate || startDate.isSame(endDate))
                            ? 'error'
                            : null
                    }
                    help={
                        submitted && startDate && endDate && startDate.isSame(endDate)
                            ? 'Event has to be at least one day long.'
                            : null
                    }
                >
                    <RangePicker
                        style={{ width: '100%' }}
                        onChange={onDateChange}
                        value={[startDate, endDate]}
                    />
                </Form.Item>
                <Form.Item label="Event Color">
                    <CirclePicker
                        width="100%"
                        color={color}
                        colors={colors}
                        onChange={onColorChange}
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default NewEventModal;
