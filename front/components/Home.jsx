import { Outlet, useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {isValidEthereumAddress, isValidEthereumTxHash, isNumber} from '../utils/Validators'
import {useQuery} from 'react-query'

const getCurrentBlockNumber = async()=>{
    try{
        const response = await fetch("http://localhost:4000");
        const data = await response.json();
        return data.blockNumber;
     } catch(ex){
        return ex.message;
     }
}

export const Home = function (){
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const {isLoading, isError, data} = useQuery(["currentBlockNumber"], getCurrentBlockNumber);

    const onSubmit = (data) => {
        // IF LENGTH = 66 -> TX
        // IF LENGTH = 42 -> ACCOUNT ADDRESS
        // IN ANOTHER CASE -> BLOCK
        const param = data.account_tx_block;
        if(param.length == 0){
            navigate("notEmptyField");
        }
        else if(param.length == 66){
            if(isValidEthereumTxHash(param)){
                navigate(`tx/${param}`);
            } else {
                navigate("noValidTransaction");
            }
        } else if(param.length == 42){
            if(isValidEthereumAddress(param)){
                navigate(`balance/${param}`);
            } else {
                navigate("noValidAccountAddress");
            }
        } else {
            if(isNumber(param)){
                navigate(`block/${param}`);
            } else{
                navigate("noValidBlock");
            }
        }
        


    };

    let headerToShow;
    if(isLoading){
        headerToShow = "Loading...";
    }
    if(isError){
        headerToShow = data;
    } else{
        headerToShow = `Current BlockNumber: ${data}`;
    }   
    
    return <div>
        <h1>{headerToShow}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input {...register("account_tx_block")} id="account_tx_block" placeholder="Account/Tx/Block" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Go</button>
        </form>
        <Outlet/>
    </div>;
}