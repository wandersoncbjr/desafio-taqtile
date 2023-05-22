import React, { useState } from 'react';
import { colors } from '../../typography/colors';
import './index.css';
import { constants } from '../../typography';
import { Label } from '../typography/label/label';

interface InputProps {
  label?: string;
  error?: boolean;
  type?: string;
  caption?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  iconError?: React.ReactNode;
}

export function Input({ error, type, placeholder, label, icon, iconError, caption }: InputProps) {
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const inputStyle = {
    borderRadius: '8px',
    border: '',
  };

  const inputForm = {
    fontFamily: constants.font.family.primary,
    fontSize: constants.font.size.large,
  };
  const captionStyle = {
    color: colors.FeedbackError,
    fontFamily: constants.font.family.primary,
  };

  if (focused) {
    inputStyle.border = '2px solid';
  } else if (error) {
    inputStyle.border = `1px solid ${colors.FeedbackError}`;
  } else if (inputValue === '') {
    inputStyle.border = `1px solid ${colors.NeutralLight}`;
  } else {
    inputStyle.border = '1px solid';
  }

  return (
    <div className="container">
      <div style={inputStyle} className="container-input">
        <div className="container-label">
          <Label>{label}</Label>
          <div className="input-icon">
            <input
              className="input-form"
              onChange={handleInputChange}
              type={type}
              placeholder={placeholder}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              style={inputForm}
            />
          </div>
        </div>
        {icon && <span className="icon-placeholder">{icon}</span>}
      </div>
      {error && (
        <span style={captionStyle}>
          {iconError}
          {caption}
        </span>
      )}
    </div>
  );
}
