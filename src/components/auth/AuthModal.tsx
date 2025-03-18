import Modal from '../common/Modal'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import { closeAuthPopup } from '../../store/slices/authSlice'
import { useState } from 'react'
import { auth } from '../../firebase/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const AuthModal = () => {
  const dispatch = useDispatch()
  const { isAuthPopupOpen, isRegister } = useSelector((state: RootState) => state.auth)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleAuth = async () => {
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password)
        alert('Đăng ký thành công!')
      } else {
        await signInWithEmailAndPassword(auth, email, password)
        alert('Đăng nhập thành công!')
      }
      dispatch(closeAuthPopup())
    } catch (error) {
      console.error('Lỗi:', error)
    }
  }

  return (
    <Modal isOpen={isAuthPopupOpen} onClose={() => dispatch(closeAuthPopup())}>
      <h2 className='text-xl font-bold text-center mb-4'>{isRegister ? 'Đăng ký' : 'Đăng nhập'}</h2>
      <input
        type='email'
        className='w-full px-4 py-2 mb-2 border rounded'
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        className='w-full px-4 py-2 mb-4 border rounded'
        placeholder='Mật khẩu'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='w-full py-2 bg-blue-500 text-white rounded mb-2' onClick={handleAuth}>
        {isRegister ? 'Đăng ký' : 'Đăng nhập'}
      </button>
      <p
        className='text-center text-sm text-gray-600 cursor-pointer hover:underline'
        onClick={() => dispatch(closeAuthPopup())}
      >
        {isRegister ? 'Đã có tài khoản? Đăng nhập' : 'Chưa có tài khoản? Đăng ký'}
      </p>
    </Modal>
  )
}

export default AuthModal
