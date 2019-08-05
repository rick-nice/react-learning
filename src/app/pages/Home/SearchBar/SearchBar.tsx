import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Input, Select, Button, Form } from 'antd'

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

  const onSearchClick = (e: FormEvent) => {
    e.preventDefault()
    getSearchedBeers(name, filterType, filterValue)
  }

  return (
    <Form layout='inline' onSubmit={onSearchClick}>
      <Form.Item>
        <Input
          placeholder='input beer name'
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
      </Form.Item>
      <Form.Item>
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
      </Form.Item>
      <Form.Item>
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFilterValue(Number(e.target.value))
          }
        />
      </Form.Item>
      <Form.Item>
        <Button type='primary' shape='circle' icon='search' htmlType='submit' />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
