import React, { useState } from "react";

function SearchForm({ search }){
  const [term, setTerm] = useState('');

  function handleChange(event) {
    setTerm(event.target.value);
  }

  return (
    <div>
      <input
      name="term"
      value={term}
      onChange={handleChange} />
      <button type="submit">Submit</button>
    </div>
  )
}

export default SearchForm;