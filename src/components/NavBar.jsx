import CartWidget from "./CartWidget"

function NavBar (){
    return(
        <nav style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 20px',
            backgroundColor: '#222',
            color: 'whitesmoke',
            width: '100%',
            boxSizing: 'border-box'
        }}>
            <h1 style={{
                margin: 0,
                fontSize: '1rem',
            }}>Tienda de suplementos</h1>
            <ul style={{
                display: 'flex',
                listStyle: 'none',
                gap: '20px',
                margin: 0,
                padding: 0
            }}>
                <li>Proteinas</li>
                <li>Creatinas</li>
                <li>Colagenos</li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar