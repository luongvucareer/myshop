interface Props {
  categories: { _id: string; name: string }[]
}

const CategoryList = ({ categories }: Props) => {
  return (
    <table className='min-w-full bg-white border border-gray-300'>
      <thead>
        <tr className='bg-gray-200'>
          <th className='border px-4 py-2'>Category Name</th>
          <th className='border px-4 py-2'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <tr key={category._id}>
            <td className='border px-4 py-2'>{category.name}</td>
            <td className='border px-4 py-2'>
              <button className='btn btn-danger mx-2'>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CategoryList
