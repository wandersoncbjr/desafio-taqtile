import React, { useState } from 'react';
import { colors } from '../../typography/colors';
import './form.css';
import { constants } from '../../typography';
import { Label } from '../typography/label/label';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  caption?: string;
  icon?: React.ReactNode;
  iconError?: React.ReactNode;
  change?: React.Dispatch<React.SetStateAction<string>>;
}

export function Input({ error, label, icon, iconError, caption, change, ...rest }: InputProps) {
  const [focused, setFocused] = useState(false);
  const inputStyle = {
    borderRadius: '8px',
    border: '',
    backgroundColor: colors.Neutral,
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
  } else if (rest.value === '') {
    inputStyle.border = `1px solid ${colors.NeutralLight}`;
  } else {
    inputStyle.border = '1px solid';
  }

  return (
    <div>
      <div style={inputStyle} className="style-input">
        <div className="style-label">
          <Label>{label}</Label>
          <div>
            <input
              className="input-form"
              onChange={change ? (e) => change(e.target.value) : undefined}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              style={inputForm}
              {...rest}
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
