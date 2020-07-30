import React from 'react';

function FormField ({ labelText, type, value, name, placeHolder, onChange }) {
    return (
        <div>
            <label>
                { labelText }
                <input
                    type={ type }
                    value={ value }
                    name={ name }
                    placeholder={ placeHolder }
                    onChange={ onChange }
                />
            </label>
        </div>
    );
}

export default FormField;
