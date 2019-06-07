import React from 'react';
import styled from 'styled-components';
import { Modal, Input, DatePicker, Form } from 'antd';
import { CirclePicker } from 'react-color';
import { EVENT_DATE_FORMAT } from 'config';

const { TextArea } = Input;
const { RangePicker } = DatePicker;

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
        setColor(colors[0]);
        setName('');
        setStartDate(null);
        setEndDate(null);
        setSubmitted(false);

        props.onClose();
    }

    function onSubmit() {
        setSubmitted(true);

        if (!name || !startDate || !endDate) {
            return;
        }

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
            <Form>
                <Form.Item label="Event Name" validateStatus={submitted && !name ? 'error' : null}>
                    <TextArea id="event-name-input" rows={2} value={name} onChange={onNameChange} />
                </Form.Item>
                <Form.Item
                    label="Event Dates"
                    validateStatus={submitted && (!startDate || !endDate) ? 'error' : null}
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
