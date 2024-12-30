import Cliente from "../core/Cliente";
import {EditIcon, TrashIcon} from "./Icons";

interface TableProps{
    clientes: Cliente[],
    clienteEdit?:(cliente: Cliente)=>void,
    clienteDelete?:(cliente: Cliente)=>void,
}
export default function Table(props: TableProps){
    return <>
        <table className="w-full overflow-hidden rounded-xl">
            <thead className={`
                    text-gray-100
                    bg-purple-600
                `}>
                <tr>
                    <th className="text-left p-4">Código</th>
                    <th className="text-left p-4">Nome</th>
                    <th className="text-left p-4">Idade</th>
                    {props.clienteDelete || props.clienteEdit ? <>
                        <th className="text-left p-4">Ação</th>
                    </> : null} 
                </tr>
            </thead>
            {props.clientes?renderBody():null}
        </table>
    </>
    function renderBody(){
        return <>
            <tbody>
                {props.clientes.map((cliente, i) => 
                    <tr key={i} className={ i%2==0 ? "bg-purple-100":"bg-purple-300"}>
                        <td className="text-left p-4">{cliente.getId()}</td>
                        <td className="text-left p-4">{cliente.getNome()}</td>
                        <td className="text-left p-4">{cliente.getIdade()}</td>
                        {props.clienteDelete || props.clienteEdit ? renderActions(cliente) : null} 
                    </tr>
                )}
            </tbody>
        </>
    }
    function renderActions(cliente){
        return <>
            <td className="text-left p-4">
                <div className="flex justify-start items-center gap-2">
                    {props.clienteEdit?(
                        <button onClick={_=>{props.clienteEdit(cliente)}} className={`
                            h-full
                            rounded-xl flex justify-center itens-center
                            text-green-700 hover:bg-purple-200
                            p-2
                        `}>
                            {EditIcon}
                        </button>
                    ): null }
                    {props.clienteDelete?(
                        <button onClick={_=>{props.clienteDelete(cliente)}} className={`
                            h-full
                            rounded-xl flex justify-center itens-center
                            text-red-700 hover:bg-purple-200
                            p-2 
                        `}>
                            {TrashIcon}
                        </button>
                    ): null }
                </div>
            </td>
        </>
    }
}