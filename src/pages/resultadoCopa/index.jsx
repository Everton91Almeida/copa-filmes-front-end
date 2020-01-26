import React, { useState, useEffect } from "react";
import apiFilmes from "../../services/apiFilmes";
import { CardWinner, Button, Page } from "../../components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function ResultadoCopa(props) {
    const [winners, setWinners] = useState([]);

    useEffect(() => {
        async function loadWinners() {
            const { data } = await apiFilmes.post("/filme/winners", props.location.state);
            setWinners(data);
        }
        loadWinners();
    }, [props.location.state]);

    const instructions = `Veja o resultado final da copa de filmes.`

    return (
        <Page
            name="Resultado final"
            instructions={instructions}
        >
            {winners.map(winner =>
                <CardWinner
                    key={winner.titulo}
                    filme={winner}
                />)}
            <Button
                onClick={() => props.history.push("/")}
                title="Voltar"
            >
                <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
        </Page>);
}