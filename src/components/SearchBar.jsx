import React from 'react'
import { Input, Select } from 'antd'

const { Search } = Input
const { Group: InputGroup } = Input
const { Option } = Select

const SearchBar = () => (
  <InputGroup compact>
    <Select defaultValue="Option1">
      <Option value="Option1">Option1</Option>
      <Option value="Option2">Option2</Option>
    </Select>
    <Search placeholder="input search text" enterButton />
  </InputGroup>
)

export default SearchBar
