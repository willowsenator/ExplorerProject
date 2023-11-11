import { Outlet, useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {isValidEthereumAddress, isValidEthereumTxHash, isNumber} from '../utils/Validators'


export const Home = function (){
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

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
    
    return <div>
        <h1>Current BlockNumber:  </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input {...register("account_tx_block")} id="account_tx_block" placeholder="Account/Tx/Block" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Go</button>
        </form>
        <Outlet/>
    </div>;
}