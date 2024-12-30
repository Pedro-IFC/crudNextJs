import Layout from "../components/Layout";
import Table from "../components/Table";
import Formulario from "../components/Formulario";
import Botao from "../components/Botao";
import useClientes from "../hooks/useClientes";
import useVisible from "../hooks/useVisible";

export default function Home() {
  const {} = useVisible();
  const {setTabelaVisivel, tabelaVisivel, cliente, clientes, salvarCliente, cadastrarCliente, clienteDelete, clienteEdit, obterTodos} = useClientes();
  return <>
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <div className="conteudo">
          {tabelaVisivel?
          <>
            <Botao onClick={()=>cadastrarCliente()} className="bg-green-500">Cadastrar cliente</Botao>
            <Table clientes={clientes} clienteDelete={clienteDelete} clienteEdit={clienteEdit}></Table>
          </>
        :
        <>
          <Formulario 
            clienteMudou={salvarCliente} 
            cancelado={()=>setTabelaVisivel()} 
            cliente={cliente}
          ></Formulario>
        </>
        }
        </div>
      </Layout>
    </div>
  </>
}
