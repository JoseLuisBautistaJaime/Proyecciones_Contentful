const mockAxios = jest.genMockFromModule('axios')
mockAxios.create = jest.fn(() => mockAxios)
//mockAxios.create = jest.fn(() => mockAxios)
export default mockAxios