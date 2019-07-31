import React, { useState, ChangeEvent } from 'react'
import { Input, Select, Button } from 'antd'

const { Group: InputGroup } = Input
const { Option } = Select

interface IProps {
  getSearchedBeers: (
    name: string,
    filterType: string,
    filterValue: number
  ) => void
}

const SearchBar = ({ getSearchedBeers }: IProps) => {
  const [name, setName] = useState('')
  const [filterType, setFilterType] = useState('abv_gt')
  const [filterValue, setFilterValue] = useState(0)
  const onSearchClick = () => getSearchedBeers(name, filterType, filterValue)

  return (
    <InputGroup compact>
      <Input
        style={{ width: '40%' }}
        placeholder='input beer name'
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <Select
        defaultValue={filterType}
        onChange={(value: string) => setFilterType(value)}
      >
        <Option value='abv_gt'>ABV greater than</Option>
        <Option value='abv_lt'>ABV less than</Option>
        <Option value='ibu_gt'>IBU greater than</Option>
        <Option value='ibu_lt'>IBU less than</Option>
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
