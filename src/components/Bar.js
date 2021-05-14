import React from 'react';

const Bar = ({bar : { icon, name, level }}) => {
    const barWidth = `${level}%`
    return (
        <div className="bar">
            <div className="bar__wrapper" style={{
                'width': barWidth
            }}>
                <span className="bar__name">
                    <img src={icon} alt="icon" className="bar__icon mr-2" />{name}
                </span>
            </div>
        </div>
    );
};

export default Bar;