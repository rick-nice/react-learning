import React, { useState, ChangeEvent } from 'react'
import { Input, Select, Button } from 'antd'

import { OPTIONS, ABV_GREATER } from './constants'

const { Group: InputGroup } = Input
const { Option } = Select

export interface ISearchProps {
  getSearchedBeers: (
    name: string,
    filterType: string,
    filterValue: number
  ) => void
}

interface setIsListEmpty {
  setIsListEmpty: (isEmpty: boolean) => void
}

const SearchBar = ({
  getSearchedBeers,
  setIsListEmpty,
}: ISearchProps & setIsListEmpty) => {
  const [name, setName] = useState('')
  const [filterType, setFilterType] = useState(ABV_GREATER.type)
  const [filterValue, setFilterValue] = useState(0)

  const onSearchClick = () => {
    getSearchedBeers(name, filterType, filterValue)
    setIsListEmpty(false)
  }

  return (
    <InputGroup compact>
      <Input
        style={{ width: '20%' }}
        placeholder='input beer name'
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <Select
        defaultValue={filterType}
        onChange={(value: string) => setFilterType(value)}
      >
        {OPTIONS.map(({ type, title }, index) => (
          <Option key={index} value={type}>
            {title}
          </Option>
        ))}
      </Select>
      <Input
        style={{ width: '10%' }}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFilterValue(Number(e.target.value))
        }
      />

      <Button
        type='primary'
        shape='circle'
        icon='search'
        onClick={onSearchClick}
      />
    </InputGroup>
  )
}

export default SearchBar
