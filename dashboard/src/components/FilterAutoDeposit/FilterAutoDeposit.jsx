import React from 'react'
// Styles
import { Form, InputWrap, Wrapper } from "./FilterAutoDeposit.styles";
import SelectCustom from '../SelectCustom';
import {  selectDate } from '../../utils/date';
const FilterAutoDeposit = () => {
  return (
    <Wrapper>
      <Form>
        <InputWrap>
          <label>Search</label>
          <input
            type="text"
            placeholder="Username, account name, bank name, ifsc"
          />
        </InputWrap>

        <InputWrap>
          <label>Date</label>
          <SelectCustom date={selectDate} activeData={"Today"} />
        </InputWrap>
      </Form>
    </Wrapper>
  );
};

export default FilterAutoDeposit;