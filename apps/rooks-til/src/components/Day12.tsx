import { useInput } from '@til/lib'

const Day12 = () => {
  const myInput = useInput('hello', {
    validate: newValue => newValue.length < 15,
  })
  return (
    <div>
      <p> Max length 15 </p>
      <input {...myInput} />
      <p>
        Value is <b>{myInput.value}</b>
      </p>
    </div>
  )
}

export default Day12
