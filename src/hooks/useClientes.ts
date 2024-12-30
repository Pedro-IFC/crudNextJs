import Cliente from "../core/Cliente";
import { useEffect, useState } from "react";
import ClienteRepositorio from "../core/ClienteRepositorio";
import CollectionCliente from "../backend/db/CollectionCliente";
import useVisible from "./useVisible";

export default function useClientes(){
    
  const repo: ClienteRepositorio = new CollectionCliente();
  const {formularioVisivel, tabelaVisivel, setFormVisivel, setTabelaVisivel} = useVisible();
  const [cliente, setCliente] = useState<Cliente>();
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(obterTodos, []);
  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes);
      setTabelaVisivel();
    });
  }
  let clienteEdit = (cliente: Cliente) =>{
    setCliente(cliente);
    setFormVisivel();
  }
  let clienteDelete = (cliente: Cliente) =>{
    repo.excluir(cliente);
    obterTodos()
  }
  let salvarCliente = (cliente: Cliente) =>{
    repo.salvar(cliente);
    obterTodos()
  }
  let cadastrarCliente = () =>{
    setCliente(Cliente.vazio());
    setFormVisivel();
  }
  return {
    formularioVisivel, 
    tabelaVisivel, 
    setFormVisivel, 
    setTabelaVisivel,
    cliente,
    clientes,
    salvarCliente,
    cadastrarCliente,
    clienteDelete,
    clienteEdit,
    obterTodos,
  }
}