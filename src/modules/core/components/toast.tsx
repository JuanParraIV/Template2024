import info from '@/assets/svg/info.svg'
import type React from 'react'

interface ToastProps {
  body: string
  type: string
}

const Toast: React.FC<ToastProps> = ({
  body,
  type,
}: { body: string; type: string }) => {
  return (
    <div>
      <div className="toast toast-end">
        <div className={`alert alert-${type} text-white flex items-center`}>
          <img src={info} alt="info" className="size-5" />
          <span>{body}</span>
        </div>
      </div>
    </div>
  )
}

export default Toast
