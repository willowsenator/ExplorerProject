import {useParams} from 'react-router-dom'
import {useQuery} from 'react-query'

const getBlock = async(blockNumber) => {
    try{
        console.log(`BlockNumber: ${blockNumber}`)
        const res = await fetch(`http://localhost:4000/block/${blockNumber}`);
        const data = await res.json();
        console.log(blockNumber);
        console.log(data);
        return data;
    } catch(ex){
        return ex.message;
    }
}

export const Block = () => {
    const params = useParams();
    console.log(params);
    
    const {isLoading, isError, data} = useQuery(["blockNumber", params.blockNumber], () => getBlock(params.blockNumber));

    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError){
        return <h1>{data}</h1>
    }

    return <div>
        <h1>Block: {params.blockNumber}</h1>
        {JSON.stringify(data,null,4)}
    </div>
};