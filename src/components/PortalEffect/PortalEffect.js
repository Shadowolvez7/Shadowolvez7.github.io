import React from 'react';
import '../../styles/PortalEffect.scss'; // Make sure to create this SCSS file
import portalSpinImage from '../../images/portalSpin.png'

const PortalEffect = ({ className }) => {
    // Inline style object for the portal image
    const portalStyle = {
        '--portal-img': `url(${portalSpinImage})`
    };

    const combinedClassName = `portal-frame ${className || ''}`.trim();

    return (
        <div className={combinedClassName}>
            <div className="portal" style={portalStyle}>
                <div className="portal-ripple"></div>
                <div className="portal-inner"></div>
            </div>
            <div className="portal-glow"></div>
        </div>
    );
};

// Make sure to define propTypes or TypeScript interfaces for the props
PortalEffect.defaultProps = {
    className: '', // default className if not provided
};
  
export default PortalEffect;
