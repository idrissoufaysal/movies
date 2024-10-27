import React from 'react';

const Loading = () => {
  const dotStyle = {
    width: '13.4px',
    height: '13.4px',
    background: '#fff',
    color: '#020307',
    borderRadius: '50%',
    boxShadow: '22.4px 0,-22.4px 0',
    animation: 'dots-u8fzftmd 1s infinite linear alternate',
  };

  return (
    <>
      <div className="dots" style={dotStyle}></div>
      <style>
        {`
          @keyframes dots-u8fzftmd {
            0% {
              box-shadow: 22.4px 0,-22.4px 0;
              background: ;
            }
            33% {
              box-shadow: 22.4px 0,-22.4px 0 rgba(2,3,7,0.13);
              background: rgba(2,3,7,0.13);
            }
            66% {
              box-shadow: 22.4px 0 rgba(2,3,7,0.13),-22.4px 0;
              background: rgba(2,3,7,0.13);
            }
          }
        `}
      </style>
    </>
  );
};

export default Loading;