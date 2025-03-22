import { useEffect, useState } from 'react'
import AddCategoryForm from './AddCategoryForm'
import CategoryList from './CategoryList'

const Categories = () => {
  const [categories, setCategories] = useState<{ _id: string; name: string }[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/categories')
        if (!response.ok) throw new Error(`Error: ${response.statusText}`)
        const data = await response.json()
        setCategories(data)
      } catch (err) {
        setError('Failed to fetch categories')
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  const handleCategoryAdded = (newCategory: { _id: string; name: string }) => {
    setCategories([...categories, newCategory])
  }

  return (
    <div className='mx-wrapper'>
      <h1 className='text-4xl font-bold mb-6'>Admin - Categories</h1>

      {loading && <p>Loading categories...</p>}
      {error && <p className='text-red-500'>{error}</p>}

      <AddCategoryForm onCategoryAdded={handleCategoryAdded} />
      <CategoryList categories={categories} />
    </div>
  )
}

export default Categories
