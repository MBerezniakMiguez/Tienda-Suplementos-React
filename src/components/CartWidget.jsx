function CartWidget(){
    return(
        <div style={{
            position: 'relative',display: 'inline-block',}}>
          <span style={{fontSize: '1.5rem'}}>🛒</span>
          <span style={{
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            backgroundColor: 'grey',
            color: 'black',
            borderRadius: '50%',
            padding: '2px 6px',
            fontSize: '0.8rem'
          }}>
            3
          </span>
        </div>
    )
}

export default CartWidget