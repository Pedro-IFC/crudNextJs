// src/backend/db/CollectionCliente.ts
import { db } from '../config';  // Importando o Firestore inicializado do config.tsx
import { collection, doc, setDoc, addDoc, getDocs, deleteDoc, getDoc, QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore';
import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";

export default class CollectionCliente implements ClienteRepositorio {
    // Conversor para converter os dados do Firestore para o tipo Cliente
    conversor = {
        toFirestore(cliente: Cliente) {
            if (!cliente.getNome() || !cliente.getIdade()) {
                throw new Error("Os dados do cliente estão incompletos.");
            }
            return {
                nome: cliente.getNome(),
                idade: cliente.getIdade(),
            };
        },
        fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Cliente {
            const dados = snapshot.data(options);
            if (!dados || !dados.nome || !dados.idade) {
                throw new Error("Os dados do documento estão incompletos ou inválidos.");
            }
            return new Cliente(dados.nome, dados.idade, snapshot.id);
        }
    };

    async salvar(cliente: Cliente): Promise<Cliente> {
        const clienteData = this.conversor.toFirestore(cliente); // Convertendo o cliente para o formato do Firestore
    
        if (cliente.getId()) {
            // Se o cliente já possui um ID, atualizamos os dados
            await setDoc(doc(db, 'clientes', cliente.getId()), clienteData, { merge: true });
            return cliente; // Retorna o próprio cliente com ID atualizado
        } else {
            // Se o cliente não tem ID, criamos um novo documento
            const docRef = await addDoc(collection(db, 'clientes'), clienteData);
            const docSnap = await getDoc(docRef); // Obtém o documento recém-criado
            const novoCliente = this.conversor.fromFirestore(docSnap, {}); // Converte o documento para o tipo Cliente
            return novoCliente;
        }
    }

    async excluir(cliente: Cliente): Promise<void> {
        await deleteDoc(doc(db, 'clientes', cliente.getId())); // Exclui o documento pelo ID
    }

    async obterTodos(): Promise<Cliente[]> {
        const querySnapshot = await getDocs(collection(db, 'clientes'));
        // Converte todos os documentos para objetos Cliente e retorna um array
        return querySnapshot.docs.map(doc => this.conversor.fromFirestore(doc, {})) ?? [];
    }
}
