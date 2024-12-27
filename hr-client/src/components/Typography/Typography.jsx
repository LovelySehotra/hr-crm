import React from 'react'
import "./Typography.css"
const Typography = ({type,children}) => {
    const renderMessage = () => {
        switch (type) {
          case 'subHeading':
            return <p style={{ color: 'red' }}>{children}</p>;
          case 'subText':
            return <p className='subText' >{children}</p>;
            case 'caption':
                return <p className='subText caption ' >{children}</p>;
          default:
            return <h1 className='heading'> {children}</h1>;
        }
      };
    
      return <div>{renderMessage()}</div>;
}

export default Typography
