import * as React from 'react'
import PropTypes from 'prop-types'
import { StyledOptionsSelect, StyledSelect } from './OptionsSelect.styles'

export const OptionsSelect = ({ options, dataTestid, placeholder, onChange }) => {
  const handleChange = event => {
    onChange(event.target.value)
  }

  return (
    <StyledSelect>
      <StyledOptionsSelect
        data-testid={dataTestid}
        onChange={handleChange}
        defaultValue={options.length === 1 ? options[0].code : ''}>
        {placeholder && options.length > 1 && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map(option => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </StyledOptionsSelect>
    </StyledSelect>
  )
}

OptionsSelect.propTypes = {
  options: PropTypes.array.isRequired,
  dataTestid: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}
