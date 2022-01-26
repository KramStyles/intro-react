function Navbar() {
    return(
        <h1>Nothing</h1>
    )
}

function MainContent(){
    return(<h1>I am learning React</h1>);
}

const h1 = document.createElement("h1");
h1.textContent = "This is a heading";
h1.className = "header";
console.log(h1);

const h12 = <h1 className="header">This is confusing! For now</h1>;
console.log(h12);

ReactDOM.render(<h1>Welcome and Hello</h1>, document.getElementById('root'));
ReactDOM.render(<div><Navbar /><MainContent /></div>, document.getElementById('root'));
// document.getElementById('root').appendChild(h1);

const nav = (
  <nav>
      <h1>Brand Name</h1>
      <ol>
          <li>Pricing</li>
          <li>About us</li>
          <li>Contact</li>
      </ol>
  </nav>
);

ReactDOM.render(nav, document.getElementById('root'))