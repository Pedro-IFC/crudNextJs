interface EntradaProps{
    texto:string, 
    type: 'text' | 'number',
    value: any,
    onlyR: boolean,
    onChange?:(valor: any) => void
}
export default function Entrada(props: EntradaProps){
    return <>
        <div className="flex flex-col mb-4">
            <label className="mb-4">
                {props.texto}
            </label>
            <input type="text" 
                typeof={props.type}
                value={props.value}
                readOnly={props.onlyR}
                className={`
                    border border-purple-500 rounded-lg
                    px-4 py-2  
                    focus:outline-none
                    ${props.onlyR?"bg-gray-300 cursor-not-allowed":"bg-gray-50 hover:bg-white"}
                `}
                onChange={e=>props.onChange?.(e.target.value)}
                />
        </div>
    </>
}