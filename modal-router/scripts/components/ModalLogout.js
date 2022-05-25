function ModalLogout (props) 
{
    if(!props.show)
    {
        return null;
    }

    return <div className="modal">
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">LOGOUT</h4>
            </div>
            <div className="modal-body">
                Tem certeza que gostaria de sair?
            </div>
            <div className="modal-footer">
                <button onClick={()=>props.state(false)} className="modal-button">SIM</button>
                <button onClick={()=>props.state(false)} className="modal-button">NÃO</button>
            </div>
        </div>
    </div>
}