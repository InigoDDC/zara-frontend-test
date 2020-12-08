import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, sizes } from 'ui/theme'

export const SearchBox = ({ onChange }) => {
  const handleChange = event => {
    onChange(event.target.value)
  }

  return (
    <StyledSearch>
      <StyledInput onChange={handleChange} />
    </StyledSearch>
  )
}

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired
}

const StyledSearch = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;

  margin-bottom: ${sizes.medium};
`

const StyledInput = styled.input`
  padding: ${sizes.small} ${sizes.base};

  border: 1px solid ${colors.darkBlue};
  border-radius: ${sizes.small};

  :focus {
    border-width: 2px;
    outline: none;
  }
`
