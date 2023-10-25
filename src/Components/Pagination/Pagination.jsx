import './Pagination.css'
const Pagination = ({totalPosts, postPerPage, setCurrentPage, currentPage}) => {
    let page = [];
    for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++){
        page.push(i)
    }
    return (
       <div className="pagination">
        {
            page.map((page, index) => {
                return <button key={index} onClick={() => setCurrentPage(page)} className={page == currentPage ? "active" : ""}>{page}</button>
                
                
           })
        }
       </div>
    );
};

export default Pagination;