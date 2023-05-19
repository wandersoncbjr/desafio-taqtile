import React, { useState } from 'react';
import { colors } from '../../typography/colors';
import './index.css';
import { constants } from '../../typography';

interface InputProps {
  label?: string;
  error?: boolean;
  type?: string;
  caption?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  iconError?: React.ReactNode;
}

export function Input({ error, type, caption, placeholder, label, icon, iconError }: InputProps) {
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };
  const inputStyle = {
    borderRadius: '8px',
    border: focused
      ? '2px solid'
      : error
      ? `1px solid ${colors.FeedbackError} `
      : inputValue === ''
      ? ` 1px solid ${colors.NeutralLight}`
      : '1px solid',
  };
  return (
    <div className="container">
      <div style={inputStyle} className="container-input">
        <div className="container-label">
          <label
            style={{
              fontFamily: constants.font.family.primary,
              color: colors.NeutralMedium,
            }}
          >
            {label}
          </label>
          <div className="input-icon">
            <input
              className="input-form"
              onChange={handleInputChange}
              type={type}
              placeholder={placeholder}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              style={{
                fontFamily: constants.font.family.primary,
                fontSize: constants.font.size.large,
              }}
            ></input>
          </div>
        </div>
        {icon ? <span className="icon-placeholder">{icon}</span> : null}
      </div>
      {error ? (
        <span>
          {iconError}
          {caption}
        </span>
      ) : null}
    </div>
  );
}
