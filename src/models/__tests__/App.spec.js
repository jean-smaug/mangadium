import App from '../App'

describe('<=== Manga ===>', () => {
  let app = null

  beforeEach(() => {
    app = App.create()
  })

  it('should create store', () => {
    expect(app).toMatchSnapshot()
  })

  it('should toggle loading status', () => {
    expect(app.isLoading).toBeFalsy()
    app.toggleLoadingStatus()
    expect(app.isLoading).toBeTruthy()
  })
})
