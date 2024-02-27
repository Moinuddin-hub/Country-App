import { useState } from "react";


const Search = ({onSubmit}) => {
    const[Search,setSearch]=useState("");
   
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(Search);
    }
    return (
        <>
    <form onSubmit={handleSubmit}>
       <input className="p-2 border-4"
        type="text"
        placeholder="Search Country"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn border-t-indigo-600">Search</button>
            </form>
        </>
    );
};

export default Search;