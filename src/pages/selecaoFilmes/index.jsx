import React, { useState, useEffect } from "react";
import apiFilmes from "../../services/apiFilmes";
import { CardFilme } from "../../components"

export default function SelecaoFilmes() {
    const [filmes, setFilmes] = useState([]);
    const [selectecFilmes, setSelectecFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes() {
            const { data } = await apiFilmes.get("/filme");
            setFilmes(data);
        }
        loadFilmes();
    }, []);

    const selectFilmeHandle = (filme) =>
        setSelectecFilmes([...selectecFilmes, filme]);

    const unselectFilmeHandle = (filme) =>
        setSelectecFilmes(selectecFilmes.filter(item => item.id !== filme.id));

    useEffect(() => console.log(selectecFilmes), [selectecFilmes]);

    return (
        <>
            {filmes.map(filme =>
                <CardFilme
                    key={filme.id}
                    filme={filme}
                    onSelect={() => selectFilmeHandle(filme)}
                    onUnselect={() => unselectFilmeHandle(filme)}
                />)}
        </>
    );
}