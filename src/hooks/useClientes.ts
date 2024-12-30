import Cliente from "../core/Cliente";
import { useEffect, useState } from "react";
import ClienteRepositorio from "../core/ClienteRepositorio";
import CollectionCliente from "../backend/db/CollectionCliente";
export default function useClientes(){
    
  const repo: ClienteRepositorio = new CollectionCliente();

  const [visivel, setVisivel] = useState<"tabela"|"form">("tabela");
  const [cliente, setCliente] = useState<Cliente>();
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(obterTodos, []);
  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes);
      setVisivel('tabela');
    });
  }
  let clienteEdit = (cliente: Cliente) =>{
    setCliente(cliente);
    setVisivel('form');
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
    setVisivel('form');
  }
  return {
    cliente,
    clientes,
    visivel,
    setVisivel,
    salvarCliente,
    cadastrarCliente,
    clienteDelete,
    clienteEdit,
    obterTodos,
  }
}