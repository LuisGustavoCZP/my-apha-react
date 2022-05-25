const Switch = ReactRouterDOM.Switch, Route = ReactRouterDOM.Route;

function MainContent (props)
{
    return (
    <main id="content">
        <Switch>
            <Route exact path="/" component={PageHome}/>
            <Route path="/skills" component={PageSkills}/>
            <Route path="/portfolio" component={PagePortflio}/>
            <Route path="/contact" component={PageContact}/>
            {/* <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
            
            <Route path="/profile/:username" component={Profile}/> */}
        </Switch>
    </main>
    );
}

function PageHome ()
{
    return (
    <div>
        <h3>Sobre mim</h3>
    </div>
    );
}

function PagePortflio ()
{
    return (
    <div>
        <h3>Portfolio</h3>
    </div>
    );
}

function PageSkills ()
{
    return (
    <div>
        <h3>Habilidades</h3>
    </div>
    );
}

function PageContact ()
{
    return (
    <div>
        <h3>Contato</h3>
    </div>
    );
}
