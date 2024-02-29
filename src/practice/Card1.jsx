
export default function Card1(props){
    //Destructuring the props
    const {image,title} = props
    return(
        <div>
            <div className="card p-2 m-2" style={{width:'200px'}}>
                    <img src={image} alt="pic" width="200px" height="150px"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
            </div>
        </div>
    )
}