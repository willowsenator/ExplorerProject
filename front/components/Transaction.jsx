import {useParams} from 'react-router-dom'
import {useQuery} from 'react-query'

const getTransaction = async(tx) => {
    try{
        const response = await fetch(`http://localhost:4000/tx/${tx}`);
        const data = await response.json();
        console.log(tx);
        console.log(data);
        return data;
    } catch(ex){
        return ex.message;
    }
}

export const Transaction = () => {
    const params = useParams();
    const {isLoading, isError, data} = useQuery(["tx",params.tx], ()=> getTransaction(params.tx));

    if(isLoading){
        return <h1>Loading...</h1>;
    } 
    if(isError){
        return <h1>{data}</h1>;
    } else {
        return <div>
                <h1>Tx: {params.tx}</h1>
                <h2>{JSON.stringify(data,null,4)}</h2>
            </div>
    }

    
};