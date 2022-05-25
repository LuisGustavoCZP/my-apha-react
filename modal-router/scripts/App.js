const HashRouter = ReactRouterDOM.HashRouter;
const { useState } = React;

function App (props) {
    const [show, setShow] = useState(false);

    return (
        <>
            <ModalLogout show={show} state={setShow}/>
            <HashRouter>
                <header>
                    <HeaderMe />
                    <HeaderMenu sair={setShow}/>
                    <HeaderAbout />
                </header>
                <MainContent />
            </HashRouter>
        </>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);