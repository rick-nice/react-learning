import React, { useState, ChangeEvent } from 'react'
import { Input, Select, Button } from 'antd'

const { Group: InputGroup } = Input
const { Option } = Select

export interface ISearchProps {
  getSearchedBeers: (
    name: string,
    filterType: string,
    filterValue: number
  ) => void
}

const OPTIONS = new Map([
  ['ABV greater than', 'abv_gt'],
  ['ABV less than', 'abv_lt'],
  ['IBU greater than', 'ibu_gt'],
  ['IBU less than', 'ibu_lt'],
])

const SearchBar = ({ getSearchedBeers }: ISearchProps) => {
  const [name, setName] = useState('')
  const [filterType, setFilterType] = useState('abv_gt')
  const [filterValue, setFilterValue] = useState(0)

  const onSearchClick = () => getSearchedBeers(name, filterType, filterValue)

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
        {Array.from(OPTIONS).map(([key, value], index) => (
          <Option key={index} value={value}>
            {key}
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
