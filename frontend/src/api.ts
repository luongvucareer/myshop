const API_URL = 'http://localhost:5001/api/products'

export const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL)
    return await response.json()
  } catch (error) {
    console.error('Lỗi khi lấy sản phẩm:', error)
    return []
  }
}
