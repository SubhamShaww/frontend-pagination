import "./PaginationButtons.css";

function PaginationButtons({noOfPosts, changePage}) {
    const postsArr=[]
    for (let i=0; i<noOfPosts; i++) {
        postsArr.push(0)
    }  

    return (
        <div className="paginationbuttons">
            {postsArr.map((each, index) => {
                return <div className="paginationbuttons__each" key={index} onClick={() => {changePage(index+1)}}>
                    {index + 1}
                </div>
            })}
        </div>
    )
}

export default PaginationButtons
