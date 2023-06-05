import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
function List() {
  const [list, setList] = useState([]);
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setList(json))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 0);
  }, []);
  const showCards = () => {
    return (
      <>
        {list.map((item) => {
          return (
            <div key={item.id} className="col-sm-4 card-group mb-4">
              <div className="card">
                <div className="card-body">{item.name}</div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  const showSkeleton = () => {
    return (
      <>
        {Array(10)
          .fill()
          .map((item, index) => {
            return (
              <div key={index} className="col-sm-4 card-group mb-4">
                <div className="card">
                  <Skeleton height={60} />
                </div>
              </div>
            );
          })}
      </>
    );
  };
  return (
    <div>
      <h2 className="mb-3">React Js Loading Skeleton Screen Example</h2>
      <div className="row">
        {list.length > 0 ? showCards() : showSkeleton()}
      </div>
    </div>
  );
}
export default List;
