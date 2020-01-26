import React, { useState, useEffect } from "react";
import apiFilmes from "../../services/apiFilmes";
import { CardFilme } from "../../components";
import "./styles.css";

export default function SelecaoFilmes(props) {
    const [filmes, setFilmes] = useState([]);
    const [selectecFilmes, setSelectecFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes() {
            const { data } = await apiFilmes.get("/filme");
            setFilmes(data);
        }
        loadFilmes();
    }, []);

    const handleSelect = (filme) =>
        setSelectecFilmes([...selectecFilmes, filme]);

    const handleUnselect = (filme) =>
        setSelectecFilmes(selectecFilmes.filter(item => item.id !== filme.id));

    const handleClick = () =>
        props.history.push("/resultado", selectecFilmes);

    //useEffect(() => console.log(selectecFilmes), [selectecFilmes]);

    return (
        <>
            <div className="page-header"></div>
            <div className="info">
                {selectecFilmes.length} de 8 filmes
                <button className="button" onClick={() => handleClick()}>Gerar meu campeonato</button>
            </div>
            <div className="list">
                {
                    filmes.map(filme =>
                        <CardFilme
                            key={filme.id}
                            filme={filme}
                            onSelect={() => handleSelect(filme)}
                            onUnselect={() => handleUnselect(filme)}
                        />)
                }
            </div>
        </>
    );
}