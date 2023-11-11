import {useParams} from 'react-router-dom'
export const Balance = () => {
    const params = useParams();
    return <div>
        <h1>Address: {params.account}</h1>
    </div>
};