function Navbar() {
    return(
        <h1>Nothing</h1>
    )
}

function MainContent(){
    return(<h1>I am learning React</h1>);
}

ReactDOM.render(<h1>Welcome and Hello</h1>, document.getElementById('root'));
ReactDOM.render(<div><Navbar /><MainContent /></div>, document.getElementById('root'));
