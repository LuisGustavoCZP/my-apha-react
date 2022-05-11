import Home from "./components/Home.js"

function App ()
{
    return React.createElement(Home)
}

ReactDOM.render(
    React.createElement("main", {class:"App"}, App()),
    document.getElementById("root")
);