const { useState, useEffect, useRef } = React;

import { googleBookService } from "../services/googlebooks.service.js";

export function GoogleBookFilter({onSetFilter}) {

    const [searchStr, setSearchStr] = useState("");
    
    const elInputRef = useRef(null);

    // useEffect(() => {
    //     elInputRef.current.focus();
    //   }, []);

      useEffect(() => {
        onSetFilter(searchStr);
      }, [searchStr]);

    function handleChange({ target }) {
        let { value } = target;
        if (!value) return;
        setSearchStr((value));
        console.log(value);
      }

    function onSubmit(ev) {
        ev.preventDefault();
        console.log(searchStr);
        googleBookService.query(searchStr)
        .then(res => {
            console.log(res);
            setBooks(res)  }
            )
      
      }

    return (
        <form onSubmit={onSubmit}>
        <label htmlFor="google">Search:</label>
        <input
          type="text"
          id="google"
          name="google"
          placeholder="Please enter a value"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>)
        
}