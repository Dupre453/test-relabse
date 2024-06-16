import React from 'react';
import '../styles/components/_eventsList.scss'
import {formatTimestamp} from "../utils/utils";


const EventsList = () => {

    const [events, setEvents] = React.useState([]);

    React.useEffect(() => {
        const socket = new WebSocket('wss://test.dev-relabs.ru/event');
        socket.onmessage = (event) => {
            const eventData = JSON.parse(event.data);
            setEvents(prevEvents => [...prevEvents, eventData]);
        };

        return () => socket.close();
    }, []);

    return (
        <div>
            <h2 className='flex justify-center mb-5 text-lg font-bold'>События</h2>
            <table className='events-table'>
                <thead>
                <tr>
                    <th>Дата</th>
                    <th>Событие</th>
                </tr>
                </thead>
                <tbody>
                {events.map(event => (
                    <tr key={event.ctime}>
                        <td>{formatTimestamp(event.ctime)}</td>
                        <td>{event.event}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default EventsList;