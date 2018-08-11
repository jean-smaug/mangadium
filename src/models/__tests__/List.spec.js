import List from '../List'

describe('<=== List ===>', () => {
  let list = null

  beforeEach(() => {
    list = List.create()
  })

  it('should create store', () => {
    expect(list).toMatchSnapshot()
  })
})
