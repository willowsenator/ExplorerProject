import {useParams} from 'react-router-dom'
export const Transaction = () => {
    const params = useParams();
    return <div>
        <h1>Tx: {params.tx}</h1>
    </div>
};