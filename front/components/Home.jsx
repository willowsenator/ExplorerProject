import { Outlet} from 'react-router-dom'
import {useForm} from 'react-hook-form'

export const Home = function (){
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data.account_tx_block);
    };
    
    return <div>
        <h1>Current BlockNumber:  </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="account_tx_block">
                       Account/Tx/Block
                    </label>
                    <input {...register("account_tx_block")} id="account_tx_block" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Go</button>
        </form>
        <Outlet/>
    </div>;
}