import { ReactNode } from 'react'
import { FaTimes } from 'react-icons/fa'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div className='bg-secondary p-6 rounded-lg shadow-lg w-96 relative'>
        <button className='absolute top-3 right-3 px-2' onClick={onClose}>
          <FaTimes width={20} />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
