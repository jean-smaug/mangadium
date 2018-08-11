import { Detail } from '../Detail'

describe('<=== Detail ===>', () => {
  let detail = null

  beforeEach(() => {
    detail = Detail.create()
  })

  it('should create store', () => {
    expect(detail).toMatchSnapshot()
  })
})
