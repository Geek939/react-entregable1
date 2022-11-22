const QuoteButton=({getNewValues, backgroundObject}) => {


  return (
    <button onClick={getNewValues} style = {backgroundObject}>
        <i className='bx bx-chevron-right bx-tada' ></i>
    </button>
  )

}
export default QuoteButton