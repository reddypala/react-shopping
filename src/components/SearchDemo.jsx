
export default function SearchDemo(){

  
    function handleSubmit(event){
       
    }
    return(
        <div>
            <h2>Search Params</h2>
            <form onSubmit={handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="username" /></dd>
                    <dt>Age</dt>
                    <dd><input type="number" name="Age" /></dd>
                </dl>
                <button>Submit</button>
            </form>
        </div>
    )
}