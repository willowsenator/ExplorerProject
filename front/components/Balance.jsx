import {useParams} from 'react-router-dom'
import {useQuery} from 'react-query'

const getAccount = async(account) => {
    try{
        const response = await fetch(`http://localhost:4000/balance/${account}`);
        const data = await response.json();
        return data;
    } catch(ex){
        return ex.message;
    }
}

export const Balance = () => {
    const params = useParams();
    const {isLoading, isError, data} = useQuery(["account", params.account],()=> getAccount(params.account));

    if(isLoading){
        return <h1>Loading...</h1>;
    }
    if(isError){
        return <h1>{data}</h1>;
    } else{
        return <div>
            <h1>Account: {params.account}</h1>
            <h2>Balance in Wei: {data.balanceWei}</h2>
            <h2>Balance in Ether: {data.balanceEther} Eth</h2>
        </div>;
    }
};