import { useState } from 'react';
import { homeMessages } from '../data/team';

function MessagePanel() {
    const [index, setIndex] = useState(0);

    function nextMessage() {
        setIndex((i) => (i + 1) % homeMessages.length);
    }

    return (
        <section className="message-panel">
            <div>
                <p className="eyebrow">Interactividad</p>
                <h2>Mensajes dinamicos</h2>
                <p className="message-output is-visible">{homeMessages[index]}</p>
            </div>
            <button className="button button-primary" type="button" onClick={nextMessage}>
                Mostrar otro mensaje
            </button>
        </section>
    );
}

export default MessagePanel;