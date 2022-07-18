import React, { useState, useEffect } from "react";
import axios from "axios";
import "./githubrepos.css";
import { Card } from "./Card";

export const List = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [qvalue, setQvalue] = useState("react");
  const [page, setPage]=useState(1);
  const [sort, setSort] = useState("")
  
  let getData = (value) => {
    setQuery(value.target.value);
  };
  
  let handleClick = () => {
        setQvalue(query);
  };
   
  const fetchData = () => {
    axios
      .get(`https://api.github.com/search/repositories?q=${qvalue}&page=${page}&sort=forks&order=${sort}&per_page=10`)
      .then((response) => setData(response.data.items));
  };
  useEffect(() => {
    fetchData();
  }, [qvalue, page, sort]);

  return (
    <>
      <h1>Github Repository Library</h1>
      <div className="navbardiv">
        <input type="input" className="inpfield" onChange={getData} />
        <button className="srchbtn" onClick={handleClick}>
          Search
        </button>
      </div>
      <div className="navbardiv2">
      <button className="srchbtn1" onClick={()=>setSort("asc")} >Ascend</button>
       <button className="srchbtn0" onClick={()=>setSort("desc")}>Descend</button>
      </div>
      <div>
        {data.map((el) => (
          <Card {...el} />
        ))}
      </div>
      <div className="navbardiv2">
        <button className="srchbtn1" disabled={page===1} onClick={()=>setPage(prevState=>prevState-1)}>Prev</button>
        <button className="srchbtn2">{page}</button>
        <button className="srchbtn0" disabled={page===10} onClick={()=>setPage(prevState=>prevState+1)}>Next</button>
      </div>
    </>
  );
};
