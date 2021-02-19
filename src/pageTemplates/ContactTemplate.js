import React from 'react';
import ContentZone from '../agility/components/ContentZone'

const contactTemplate = (props) => {
    return (
        <div>
        <div className="one-column-template">
            <ContentZone name="ContactTop" {...props} />
        </div>
          <div className="one-column-template">
            <ContentZone name="ContactInfo" {...props} />
        </div>
        </div>
    );
}
export default contactTemplate;
