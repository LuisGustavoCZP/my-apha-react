const NavLink = ReactRouterDOM.NavLink;

function MenuItem (props)
{
    if(props.link)
    {
        return (
        <li>
            <NavLink to={`/` + props.link}>{props.text}</NavLink>
        </li>);
    }
    else
    {
        return (
        <li>
            <NavLink exact to="/">{props.text}</NavLink>
        </li>);
    }
}

function HeaderMenu (props) 
{
    return (
    <nav id="menu">
        <ul>
            <MenuItem text="Principal" />
            <MenuItem link="skills" text="Habilidades" />
            <MenuItem link="portfolio" text="Portfolio" />
            <MenuItem link="contact" text="Contato" />
            <li><button onClick={()=>props.sair(true)}>SAIR!</button></li>
        </ul>
    </nav>
    );
}