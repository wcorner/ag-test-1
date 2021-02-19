import React from 'react';
import { renderHTML } from '../agility/utils'

const RichTextArea = ({ item }) => {

    return (
        <section className="container">
            <p>{item.customFields.text}</p>
        </section>
    );
}

export default TextandImage;
