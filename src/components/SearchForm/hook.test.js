import { act, renderHook } from '@testing-library/react'
import useForm from './hook'

const setup = (params) => renderHook(() => useForm(params))

test('should change keyword', () => {
  const { result } = setup({
    initialKeyword: 'batman'
  })

  expect(result.current.keyword).toBe('batman')
})

test('should update correctly keyword and rating', () => {
  const { result } = setup({
    initialKeyword: 'batman',
    initialRating: 'g'
  })

  act(() => {
    result.current.updateKeyword('b')
    result.current.updateKeyword('baaal')
    result.current.updateRating('pg')
  })

  expect(result.current.keyword).toBe('baaal')
  expect(result.current.rating).toBe('pg')
})
