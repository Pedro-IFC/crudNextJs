import Entrada from "./Entrada";
import Botao from "./Botao";
import Cliente from "../core/Cliente";
import { useState } from "react";

interface FormularioProps{
    cliente: Cliente,
    cancelado: ()=>void,
    clienteMudou: (cliente:Cliente) => void
}
export default function Formulario(props: FormularioProps){
    let id = props.cliente?.getId()??null;
    const [nome, setNome] = useState(props.cliente?.getNome()??null);
    const [idade, setIdade] = useState(props.cliente?.getIdade()??null);
    return <>
        <div className="bg-gray-400 p-4 rounded-xl">
            {id?
                <Entrada texto="Código" value={id} type="number" onlyR={true}></Entrada>
            :<></>}
            <Entrada 
                texto="Nome" type="text" value={nome} onlyR={false} onChange={setNome}>
            </Entrada>
            <Entrada 
                texto="Idade" type="number" value={idade} onlyR={false} onChange={setIdade}>
            </Entrada>
            <div className="flex justify-end gap-2">
                <Botao className="bg-blue-500" 
                    onClick={()=>props.clienteMudou(new Cliente(nome, +idade, id))}
                >
                    {id?"Alterar":"Salvar"}
                </Botao>
                <Botao className="bg-gray-500" onClick={props.cancelado}>Cancelar</Botao>
            </div>
        </div>
    </>
}
