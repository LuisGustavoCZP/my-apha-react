import Home from "./components/Home.js"

function App (page)
{
    return React.createElement(page)
}

ReactDOM.render(
    React.createElement("main", {class:"App"}, App(Home)),
    document.getElementById("root")
);