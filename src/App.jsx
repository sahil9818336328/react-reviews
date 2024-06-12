import { useState } from 'react'
import { people } from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const App = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const prevPerson = () => {
    setIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + people.length) % people.length
      return newIndex
    })
  }

  const nextPerson = () => {
    setIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % people.length
      return newIndex
    })
  }

  const randomPerson = () => {
    const randomIndex = Math.floor(Math.random() * people.length)
    if (randomIndex === index) {
      randomIndex = index + 1
    }

    const newIndex = randomIndex % people.length
    setIndex(newIndex)
  }

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className='btn btn-hipster' onClick={randomPerson}>
          suprise me
        </button>
      </article>
    </main>
  )
}
export default App
