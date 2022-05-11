const { styled } = window;

const StatusColors = {
    Alive:{
        StatusDiv:styled.div({
            display: "flex",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            justifyContent: "center",
            alignItems: "flex-end",
            fontSize: "100%",
            fontWeight: "bolder",
            paddingBottom: "5px",
            backgroundColor: "hsla(208, 10%, 30%, 0%)"
        }),
        StatusText:window.styled.h3({
            display: "flex",
            justifyContent: "center",
            flexGrow: "1",
            color: "hsl(207, 10%, 17%)",
            padding: "5px",
            margin: "0px 5px",
            backgroundColor: "hsla(208, 0%, 30%, 0%)"
        })
    },
    Dead:{
        StatusDiv:styled.div({
            display: "flex",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            justifyContent: "center",
            alignItems: "flex-end",
            fontSize: "100%",
            fontWeight: "bolder",
            paddingBottom: "5px",
            backgroundColor: "hsla(8, 30%, 30%, 80%)"
        }),
        StatusText:window.styled.h3({
            display: "flex",
            justifyContent: "center",
            flexGrow: "1",
            color: "hsl(207, 10%, 17%)",
            padding: "5px",
            margin: "0px 5px",
            backgroundColor: "hsla(8, 100%, 50%, 40%)"
        })
    },
    unknown:{
        StatusDiv:styled.div({
            display: "flex",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            justifyContent: "center",
            alignItems: "flex-end",
            fontSize: "100%",
            fontWeight: "bolder",
            paddingBottom: "5px",
            backgroundColor: "hsla(208, 10%, 30%, 80%)"
        }),
        StatusText:window.styled.h3({
            display: "flex",
            justifyContent: "center",
            flexGrow: "1",
            color: "hsl(207, 10%, 17%)",
            padding: "5px",
            margin: "0px 5px",
            backgroundColor: "hsla(208, 0%, 30%, 40%)"
        })
    }
}

function Status (props) 
{
    if(props.status == "unknown")
    {
        const status = StatusColors[props.status];
        return React.createElement(status["StatusDiv"], null, React.createElement(status["StatusText"], null, "DESCONHECIDO"));
    }
    else if(props.status == "Dead")
    {
        const status = StatusColors[props.status];
        return React.createElement(status["StatusDiv"], null, React.createElement(status["StatusText"], null, "MORTO"));
    }
    else return null;
}

export default Status;