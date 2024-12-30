interface BotaoProps{
    className?: string,
    children: any,
    onClick?: ()=>void
}

export default function Botao(props: BotaoProps){
    return <>
        <div className="flex justify-end pb-4">
            <button onClick={e=>props.onClick?.()} className={`
                    ml-auto mr-0
                    text-white px-4 py-2 rounded-xl ${props.className}
                `}>
                {props.children}
            </button>
        </div>
    </>
}