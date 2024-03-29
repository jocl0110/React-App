import * as React from 'react';


const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
}, {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
}
];

const App = () => {
  const welcome = {
    title: "React",
    greeting: "Hey"
  }
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      <List />
    </div> 
  );
}

  const  Search = () => {
    return (
      <div>
        <label htmlFor='search'>Search: </label>
        <input id='search' type='text'  />
      </div>
    );
  }

  function List() {
  return (
    <div>
      <ul>
        {list.map( (item) => {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span> {item.author}</span>
              <span> Comments: {item.num_comments}</span>
              <span> Points: {item.points}</span>
            </li>
          )
        })}
      </ul>
    </div>
   );
    }
export default App;