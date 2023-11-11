import {useParams} from 'react-router-dom'
export const Block = () => {
    const params = useParams();
    console.log(params);
    return <div>
        <h1>Block: {params.blockNumber}</h1>
    </div>
};