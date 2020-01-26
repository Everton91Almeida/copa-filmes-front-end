import React, { useState, useEffect } from "react";
import apiFilmes from "../../services/apiFilmes";
import { CardFilme, Button, Label, Page } from "../../components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "./styles.css";

export default function SelecaoFilmes(props) {
    const [filmes, setFilmes] = useState([]);
    const [selectecFilmes, setSelectecFilmes] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadFilmes() {
            const { data } = await apiFilmes.get("/filme");
            setFilmes(data);
        }
        loadFilmes();
    }, []);

    useEffect(() => setError(""), [selectecFilmes]);

    const handleSelect = (filme) =>
        setSelectecFilmes([...selectecFilmes, filme]);

    const handleUnselect = (filme) =>
        setSelectecFilmes(selectecFilmes.filter(item => item.id !== filme.id));

    const handleClick = () => {
        if (selectecFilmes.length === 8)
            props.history.push("/resultado", selectecFilmes);
        else setError(`Você ainda falta selecionar ${8 - selectecFilmes.length} filmes`);
    }

    const instructions = `Selecione 8 filmes que você deseja 
        que entre na competição e depois 
        pressione o botão para prosseguir.`

    return (
        <Page
            name="Fase de seleção"
            instructions={instructions}
        >
            <div className="info">
                <Label>Selecionado {selectecFilmes.length} de 8 filmes</Label>
                <span className="error">{error}</span>
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

            <Button
                onClick={() => handleClick()}
                title="Gerar minha copa"
            >
                <FontAwesomeIcon icon={faArrowRight} />
            </Button>
        </Page>
    );
}