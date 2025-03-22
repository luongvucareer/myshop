import { useState } from 'react'

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    imageUrl: '',
    stock: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setProduct({
      ...product,
      [name]: type === 'number' ? Number(value) : value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('http://localhost:5001/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })

    if (response.ok) {
      alert('Product added successfully!')
      setProduct({
        name: '',
        category: '',
        price: '',
        description: '',
        imageUrl: '',
        stock: ''
      })
    } else {
      alert('Failed to add product.')
    }
  }

  const fields = [
    { name: 'name', type: 'text', placeholder: 'Product Name' },
    { name: 'category', type: 'text', placeholder: 'Category' },
    { name: 'price', type: 'number', placeholder: 'Price' },
    { name: 'description', type: 'textarea', placeholder: 'Description' },
    { name: 'imageUrl', type: 'text', placeholder: 'Image URL' },
    { name: 'stock', type: 'number', placeholder: 'Stock' }
  ]

  return (
    <div className='mx-wrapper'>
      <h1 className='text-4xl font-bold mb-6'>Admin - Add Product</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        {fields.map(({ name, type, placeholder }) =>
          type === 'textarea' ? (
            <textarea
              key={name}
              name={name}
              placeholder={placeholder}
              value={product[name as keyof typeof product]}
              onChange={handleChange}
              className='block w-full p-2 border rounded-md'
              required
            />
          ) : (
            <input
              key={name}
              type={type}
              name={name}
              placeholder={placeholder}
              value={product[name as keyof typeof product]}
              onChange={handleChange}
              className='block w-full p-2 border rounded-md'
              required
            />
          )
        )}
        <button type='submit' className='btn btn-secondary'>
          Add Product
        </button>
      </form>
    </div>
  )
}

export default AddProduct
