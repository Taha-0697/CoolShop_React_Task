import {
  addRow,
  removeRow,
  toggleRow,
  updateSign,
  updateValue,
  selectRows,
  selectTotal
} from '.././redux/calculatorSlice'
import Section from '.././components/Section/Section'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '.././components/Header/Header'
import Button from '.././components/Button/Button'
import Paragraph from '.././components/Paragraph/Paragraph'
import classlist from './Home.module.scss'
import { Layout, InputNumber, Select } from 'antd'

const { Footer } = Layout
function Home () {
  const rows = useSelector(selectRows)
  const total = useSelector(selectTotal)
  const dispatch = useDispatch()
  const handleAddRow = () => {
    dispatch(addRow())
  }

  const handleRemoveRow = index => {
    dispatch(removeRow(index))
  }

  const handleToggleRow = index => {
    dispatch(toggleRow(index))
  }

  const handleSignChange = (index, sign) => {
    dispatch(updateSign({ index, sign }))
  }

  const handleValueChange = (index, value) => {
    dispatch(updateValue({ index, value }))
  }

  const options = [
    {
      label: '-',
      value: '-'
    },
    {
      label: '+',
      value: '+'
    }
  ]

  return (
     
        <div className={classlist.wrapper}>
          <div className={classlist.left}>
            <Button onClick={handleAddRow}>Add Row</Button>
            <div className={classlist.scrollable}>
              {rows.map((row, index) => {
                return (
                  <div className={classlist.row} key={index}>
                    <Select
                      className={classlist.dropdowns}
                      options={options}
                      value={row.sign}
                      disabled={!row.enabled}
                      onChange={e => handleSignChange(index, e)}
                    ></Select>

                    <InputNumber
                      min={0}
                      className={classlist.inputs}
                      value={row.value}
                      onChange={e => {
                        return handleValueChange(index, e)
                      }}
                      disabled={!row.enabled}
                    ></InputNumber>

                    <Button
                      disabled={!row.enabled}
                      backgroundColor={'red'}
                      onClick={() => handleRemoveRow(index)}
                    >
                      Remove
                    </Button>
                    <Button
                      backgroundColor={'grey'}
                      onClick={() => handleToggleRow(index)}
                    >
                      {row.enabled ? 'Disable' : 'Enable'}
                    </Button>
                  </div>
                )
              })}
            </div>
            <Header
              fontSize={24}
              variant={'h5'}
              style={{ marginBlockStart: 0 }}
            >
              Result: <span>{total ? total : 0}</span>
            </Header>
          </div>
          <div className={classlist.right}>
            <Header
              variant={'h3'}
              style={{
                marginBlockStart: 0,
                marginBlockEnd: 0,
                fontSize: '14px'
              }}
            >
              Task
            </Header>
            <Paragraph
              style={{ marginBlockStart: '0.2em', marginBlockEnd: '0.2em' }}
            >
              Write a simple React calculator (adder) with the following
              functionalities:
            </Paragraph>

            <ul>
              <li>Rows can be added and removed</li>
              <li>Each row has a sign (minus or plus)</li>
              <li>
                Each row can be enabled or disabled by a dedicated control
                button. Disabled rows must be excluded from the addition.
              </li>
              <li>
                The result must be updated "live" while the user is writing.
              </li>
            </ul>

            <Header
              variant={'h3'}
              style={{
                marginBlockStart: '0.6em',
                marginBlockEnd: '0.6em',
                fontSize: '14px'
              }}
            >
              Default Values
            </Header>

            <ul>
              <li>Row 1 = value is 50 and selected procedure is add.</li>
              <li>Row 2 = value is 20 and selected procedure is subtract.</li>
              <li>
                When Adding new row value will be 0 and selected procedure is
                add.
              </li>
              <li>
                Result will be updating live when entering in input field.
              </li>
            </ul>
          </div>
        </div>
     
    
  )
}

export default Home