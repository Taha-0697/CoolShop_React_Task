import { createSlice } from '@reduxjs/toolkit'

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    rows: [
      {
        sign: '+',
        value: 50,
        enabled: true
      },
      {
        sign: '-',
        value: 20,
        enabled: true
      }
    ]
  },
  reducers: {
    addRow: state => {
      state.rows.push({
        sign: '+',
        value: 0,
        enabled: true
      })
    },
    removeRow: (state, action) => {
      state.rows.splice(action.payload, 1)
    },
    toggleRow: (state, action) => {
      const index = action.payload
      state.rows[index].enabled = !state.rows[index].enabled
    },
    updateSign: (state, action) => {
      const { index, sign } = action.payload
      state.rows[index].sign = sign
    },
    updateValue: (state, action) => {
      const { index, value } = action.payload
      state.rows[index].value = value
    }
  }
})

export const { addRow, removeRow, toggleRow, updateSign, updateValue } =
  calculatorSlice.actions

export const selectRows = state => state.calculator.rows
export const selectTotal = state =>
  state.calculator.rows
    .filter(row => row.enabled)
    .reduce(
      (total, row) =>
        row.sign === '+' ? total + row.value : total - row.value,
      0
    )

export default calculatorSlice.reducer
