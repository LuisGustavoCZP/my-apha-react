import Home from "./components/home/index.js"

function App ()
{
    return React.createElement(Home)
}

ReactDOM.render(
    React.createElement("main", {class:"App"}, App()),
    document.getElementById("root")
);