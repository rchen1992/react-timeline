import React from 'react';
import styled from 'styled-components';
import { Modal, Input, DatePicker } from 'antd';
import { CirclePicker } from 'react-color';
import { EVENT_DATE_FORMAT } from 'config';

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const Label = styled.label`
    display: block;
    margin-bottom: 6px;
    font-weight: bold;
`;

const Field = styled.div`
    margin-bottom: 22px;
`;

const colors = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#8bc34a',
    '#cddc39',
    '#ffeb3b',
    '#ffc107',
    '#ff9800',
    '#ff5722',
    '#795548',
    '#607d8b',
];

function NewEventModal(props) {
    const [color, setColor] = React.useState(colors[0]);
    const [name, setName] = React.useState('');
    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);

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
        setColor(colors[0]);
        setName('');
        setStartDate(null);
        setEndDate(null);

        props.onClose();
    }

    function onSubmit() {
        props.onSubmit({
            color,
            name,
            start: startDate.format(EVENT_DATE_FORMAT),
            end: endDate.format(EVENT_DATE_FORMAT),
        });

        onClose();
    }

    return (
        <Modal
            title="New Event"
            visible={props.open}
            onOk={onSubmit}
            onCancel={onClose}
            okText="Submit"
        >
            <Field>
                <Label htmlFor="event-name-input">Event Name:</Label>
                <TextArea id="event-name-input" rows={2} value={name} onChange={onNameChange} />
            </Field>
            <Field>
                <Label>Event Dates:</Label>
                <RangePicker
                    style={{ width: '100%' }}
                    onChange={onDateChange}
                    value={[startDate, endDate]}
                />
            </Field>
            <Field>
                <Label>Event Color:</Label>
                <CirclePicker width="100%" color={color} colors={colors} onChange={onColorChange} />
            </Field>
        </Modal>
    );
}

export default NewEventModal;
