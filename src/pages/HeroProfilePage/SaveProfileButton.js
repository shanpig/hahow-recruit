import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Puff as LoadingIcon } from 'react-loading-icons';

SaveProfileButton.propTypes = {
  saveHandler: PropTypes.func,
  disabled: PropTypes.bool,
  isSaving: PropTypes.bool,
};

function SaveProfileButton({ saveHandler, disabled, isSaving }) {
  return (
    <SaveButton onClick={saveHandler} disabled={disabled}>
      {isSaving ? <LoadingIcon /> : 'SAVE'}
    </SaveButton>
  );
}

export default React.memo(SaveProfileButton);

const SaveButton = styled.button`
  min-width: 170px;
  height: 50px;
  background-color: rgb(220, 0, 0);
  color: white;
  font-family: 'Avenger', 'sans-serif';
  font-weight: bolder;
  font-size: 1.6em;
  cursor: pointer;
  letter-spacing: 10px;
  text-indent: 5px;
  border: none;
  transition: background-color ease 0.2s;

  &:hover {
    background-color: rgb(240, 0, 0);
  }

  &[disabled] {
    transition: none;
    background-color: #666;
    color: #ccc;
    cursor: unset;
  }
`;
