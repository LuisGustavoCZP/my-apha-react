import Button from "../button/index.js"

const HomePage = () => {

    function editHandler () 
    {

    }

    function logoutHandler () 
    {

    }

    const userName = "Usuario";

    return (
        React.createElement("div", { className: "container"}, 
          React.createElement("div", { className: "head"}, 
            React.createElement("div", { className: "imglocal" }, 
              React.createElement("img", { src: "images/default_user.png", width: "64" })
            ), 
            React.createElement("h1", null, "Olá, ", userName, "!"), 
            React.createElement("div", null, 
              React.createElement(Button, {onClick: editHandler}, "Editar"), 
              React.createElement(Button, {onClick: logoutHandler}, "Logout"),
              React.createElement("link", {rel: "stylesheet", href: "components/button/style.css"})
            )
          ), 
          React.createElement("div", {
            className: "user-profile"
          }), 
          React.createElement("link", {
            rel: "stylesheet",
            href: "components/home/style.css"
          })
        )
    );
}

export default HomePage;