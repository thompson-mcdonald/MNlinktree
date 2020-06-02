import React from 'react';
import useDarkMode from 'use-dark-mode';
import styled from 'styled-components'
import Toggler from '../toggle/toggler.js';

const ToggleButton = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
  display: flex;
  margin: 0 auto;
  & > button {
    font-size: 1.2em;
    background: none;
    border: none;
    color: #ffe600;
    cursor: pointer;
    transition: color 0.3s ease;
    &:last-child {
      color: #666;
    }

    &:focus {
      outline: none;
    }
  }
}

.toggle-control {
  position: relative;
  padding: 0 4px;
  display: flex;
  align-items: center;
}

input[type='checkbox'].dmcheck {
  width: 40px;
  height: 10px;
  background: #555;
  position: relative;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  vertical-align: 2px;
  outline: none;

  &:checked + label {
    left: 30px;
  }

  &:focus-visible {
    outline: solid 2px white;
  }

  & + label {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    transition: all 0.3s ease;
    cursor: pointer;
    position: absolute;
    left: 2px;
    background: #fff;
    opacity: 0.9;
    background-color: #f6f6f6;
  }
`


const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <ToggleButton>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <Toggler checked={darkMode.value} onChange={darkMode.toggle} />
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </ToggleButton>
  );
};

export default DarkModeToggle;
