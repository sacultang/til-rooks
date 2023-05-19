import { useSelect } from '@til/lib'

const Day8 = () => {
  const { index, setIndex, item } = useSelect(list, 0)
  return (
    <div>
      <h1>useSelect</h1>
      <hr />
      {list.map((item, listIndex) => (
        <button
          key={item.heading}
          onClick={() => setIndex(listIndex)}
          style={{ backgroundColor: listIndex === index ? 'antiquewhite' : '#fff' }}
        >
          {item.heading}
        </button>
      ))}
      <p>{item.content}</p>
    </div>
  )
}

export default Day8

const list = [
  {
    heading: 'Awesome',
    content: 'Great, tell me about it!',
  },
  {
    heading: "I don't know",
    content: "That's okay.",
  },
  {
    heading: 'Worst',
    content: 'The day is young.',
  },
]
