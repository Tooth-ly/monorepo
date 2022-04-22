import styles from "../../styles/header.module.css";
const header = () => {
    return (
        <div className={styles.container}>
            
            <div className={styles.headerContainer}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Human Resources</h1>
                </div>
                <div className={styles.searchContainer}>
                    <input
                    className={styles.searchInput}
                    type="text"
                    placeholder=" Search here..."
                    />
                    <div className={styles.paginationContainer}>
                    <div className={styles.pagination}>
                        <a href="#">&laquo;</a>
                        <a href="#">1</a>
                        <button className={styles.paginationSelected}>2</button>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">7</a>
                        <a href="#">&raquo;</a>
                        </div>
                </div>
                
                </div>
            </div>

        </div>
    )
}

export default header