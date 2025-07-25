import React from 'react'

const Button = ({title, borderColor, bgColor, iconTitle, textColor}) => {
  return (
    <button
      style={{
        border: `${borderColor}`,
        background: `${bgColor}`,
        color: `${textColor}`,
      }}
      className="p-3 mb-3 rounded-3xl font-bold hover:bg-white hover:text-[#D91F50] max-md:p-1"
    >
      <span>{iconTitle}</span>
      <span>{title}</span>
    </button>
  );
}

export default Button
