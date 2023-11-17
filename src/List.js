const List=(spo)=>{
    const {sportsName}=spo
    const result=sportsName.map((v)=>{
        return(

                <li>{v.sname}</li>
        )
    })
    return(
        <div className="game">
            <h2>Sports</h2>
        <ul>
            {result}
        </ul>
        </div>
    )
}

export default List;