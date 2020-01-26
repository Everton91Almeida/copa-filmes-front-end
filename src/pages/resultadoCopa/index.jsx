import React, { useState, useEffect } from "react";
import apiFilmes from "../../services/apiFilmes";

export default function ResultadoCopa(props) {
    const [winners, setWinners] = useState([]);

    useEffect(() => {
        async function loadWinners() {
            const { data } = await apiFilmes.post("/filme/winners", props.location.state);
            setWinners(data);
        }
        loadWinners();
    }, [props.location.state]);


    return winners.map(winner => <div key={winner.titulo}>{winner.titulo}</div>);
}