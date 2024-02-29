import { useReducer } from "react"
import { useFetchData } from "../hooks/useFetchData";
var initialState = { likes: 0, dislikes: 0 };

function reducer(state, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'like':
            return { likes: parseInt(state.likes) + 1, dislikes: state.dislikes };
        case 'dislike':
            return { dislikes: parseInt(state.dislikes) + 1, likes: state.likes };
    }
}

export default function ReducerDemo() {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [data] = useFetchData("http://fakestoreapi.com/products/2")



    function handleLikeClick() {
        dispatch(
            { type: 'like' }
        );
    }
    function handleDisLikeClick() {
        dispatch(
            { type: 'dislike' }
        );
    }
    return (
        <div className="container-fluid">
            <h2>product Details</h2>
            <div className="card p-2" style={{ width: '300px' }}>
                <img src={data.image} className="card-img-top" height="160px" alt="#"></img>
                <div className="card-header">
                    <p>{data.title}</p>
                </div>
                <div className="card-footer">
                    [{state.likes}]  <button className="btn btn-primary" onClick={handleLikeClick}>
                        <span className="bi bi-hand-thumbs-up"></span>
                    </button>
                    [{state.dislikes}] <button className="btn btn-danger" onClick={handleDisLikeClick}>
                        <span className="bi bi-hand-thumbs-down"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}
