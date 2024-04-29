import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({ title, url }) => {

    const [copied, setCopied] = useState(false);


    const copyToClipboard = (text) => {
        // Creamos un elemento textarea para copiar el texto
        const textarea = document.createElement('textarea');
        // Asignamos el texto que queremos copiar al valor del textarea
        textarea.value = text;
        // Hacemos que el textarea sea invisible
        textarea.style.position = 'fixed';
        textarea.style.top = '0';
        textarea.style.left = '0';
        textarea.style.opacity = '0';
        // Añadimos el textarea al DOM
        document.body.appendChild(textarea);
        // Seleccionamos el texto dentro del textarea
        textarea.select();
        // Ejecutamos el comando de copiar
        document.execCommand('copy');
        // Removemos el textarea del DOM
        document.body.removeChild(textarea);

        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      };

    const handleClickCard = (url) => {
        copyToClipboard(url)
    }

    return (
        <div className="card animate__animated animate__fadeIn" onClick={() => handleClickCard(url)}>
            {copied && <div style={{ position: 'fixed', transform: 'translateX(-50%)', background: 'rgba(0, 0, 0, 0.8)', color: '#fff', padding: '10px', borderRadius: '5px' }}>Copied!</div>}

            <img src={ url } alt={ title } />
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
