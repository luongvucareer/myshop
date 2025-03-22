import { useState } from 'react'

interface Props {
  onCategoryAdded: (newCategory: { _id: string; name: string }) => void
}

const AddCategoryForm = ({ onCategoryAdded }: Props) => {
  const [newCategory, setNewCategory] = useState('')
  const [error, setError] = useState('')

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newCategory.trim()) return

    try {
      const response = await fetch('http://localhost:5001/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newCategory.trim() })
      })

      if (!response.ok) throw new Error('Failed to add category')

      const addedCategory = await response.json()
      onCategoryAdded(addedCategory)
      setNewCategory('')
    } catch (error) {
      setError('Failed to add category')
    }
  }

  return (
    <form onSubmit={handleAddCategory} className='mb-4 flex gap-2'>
      <input
        type='text'
        placeholder='New category'
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        className='border p-2 rounded-md'
        required
      />
      <button type='submit' className='btn btn-primary'>
        Add Category
      </button>
      {error && <p className='text-red-500'>{error}</p>}
    </form>
  )
}

export default AddCategoryForm
