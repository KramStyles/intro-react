

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

function Temporary() {
    return (facts)
}

function Header() {
    let myFlex;
    let myLinks;
    return (
        <header>
            <nav className={myFlex} style={{display: "flex", justifyContent: "space-around"}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React online logo" width="20%"/>
                <div className={myLinks}>
                    <a href="">Pricing</a>
                    <a href="">About us</a>
                    <a href="">Contact</a>
                </div>
            </nav>
            <h1>Fun facts about React</h1>
        </header>
    )
}

function Main(){
    return (
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    )
}

function Footer(){
    return (
        <footer>© 2022 Michael development. All rights reserved.</footer>
    )
}
let facts = (
    <div>
        <Header/>
        <Main/>
        <Footer/>
    </div>
)


ReactDOM.render(<Temporary/>, document.getElementById('root'));