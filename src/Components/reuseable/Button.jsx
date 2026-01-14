import React from 'react';

const Button = ({ title, iconTitle, bgColor, textColor }) => {
  return (
    <button
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        color: textColor || '#fff',
        backgroundColor: bgColor || '#D91F50',
        border: 'none',
        borderRadius: 12,
        padding: '4px 10px',
        fontSize: 14,
        fontWeight: 500,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
      }}
      className="hover:bg-white hover:text-[#D91F50]"
    >
      {iconTitle && <span>{iconTitle}</span>}
      <span>{title}</span>
    </button>
  );
};

export default Button;
