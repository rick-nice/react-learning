import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Input, Select, Button, Form } from 'antd'

import { OPTIONS, ABV_GREATER } from './constants'

const { Option } = Select

export interface ISearchProps {
  requestBeer: (url: string) => void
}

const SearchBar = ({ requestBeer }: ISearchProps) => {
  const [name, setName] = useState('')
  const [filterType, setFilterType] = useState(ABV_GREATER.type)
  const [filterValue, setFilterValue] = useState(0)

  const onSubmitSearchedBeer = (e: FormEvent) => {
    e.preventDefault()
    requestBeer(`?beer_name=${name}&${filterType}=${filterValue}`)
  }

  return (
    <Form layout='inline' onSubmit={onSubmitSearchedBeer}>
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
          {OPTIONS.map(({ type, title }) => (
            <Option key={type} value={type}>
              {title}
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
