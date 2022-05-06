const HomePage = () => {

    function editHandler () 
    {

    }

    function logoutHandler () 
    {

    }

    const userName = "Usuario";

    return (
        <div className="container">
            <div className="head">
                <div className="imglocal">
                    <img src="images/default_user.png" width="64"/>
                </div>
                <h1>Olá, {userName}!</h1>     
                <div>
                    {React.createElement(Button, {onClick:editHandler}, "Editar")},
                    {React.createElement(Button, {onClick:logoutHandler}, "Logout")},
                    <link rel="stylesheet" href="components/button/style.css" /> 
                </div>
            </div>
            <div className="user-profile">

            </div>
            <link rel="stylesheet" href="components/home/style.css" />
        </div>
    );
}
