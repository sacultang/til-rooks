import { useOutsideClick } from '@til/lib'
import { useRef, useState } from 'react'

const Day7 = () => {
  const ref = useRef(null)
  const [openModal, setOpenModal] = useState(false)
  const myComponent = () => {
    setOpenModal(false)
  }
  const handleOpenModal = () => {
    setOpenModal(true)
  }
  useOutsideClick(ref, myComponent)
  return (
    <div style={{ position: 'relative' }}>
      <h1>useOutsideClick</h1>
      <div
        style={{
          width: '500px',
          height: '300px',
          backgroundColor: 'royalblue',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '2rem',
        }}
        ref={ref}
        onClick={handleOpenModal}
      >
        Click Ref
      </div>
      {openModal && (
        <div
          style={{
            width: '300px',
            height: '100px',
            backgroundColor: 'red',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '2rem',
            position: 'absolute',
            zIndex: '1',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          open modal
        </div>
      )}
    </div>
  )
}

export default Day7
