"use client"
import { FaSignOutAlt } from 'react-icons/fa'
import { SingOutAction } from './_components/SignOutAction'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Loader from '@/components/Loader'
// ================================================================
function ButtonSignOut() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const handleClick = async () => {
    setLoading(true)
    await SingOutAction()
    setLoading(false)
    router.refresh()
  }
  return (
    <button onClick={handleClick} className="flex  items-center gap-5 button cursor-pointer hover:scale-105 w-fit text-gray-500">{loading ? <Loader /> : <> <i className="text-[19px]"><FaSignOutAlt /></i> Sign out</>}</button>
  ) 
}

export default ButtonSignOut
