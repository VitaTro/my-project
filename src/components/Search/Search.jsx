import React from "react";
import css from './Search.module.css';

const Search = () =>{
    return (
        <div>
<div>
      <form className={css['search-form']} id="search-form">
        <input type="text" 
        name="searchQuery" 
        placeholder="Search..." />
        <button type="submit" className={css['submit-button']}>
          <div className={css.icons}>
            <svg className={css.svg}>
              <use href="src/components/images/icons.svg#search"></use>
            </svg>
          </div>
        </button>
      </form>
      <button type="button" className={css.btn}>
      </button>
    </div>
   
    </div>
    )
}
export default Search;