function Receipts(props) {
    return (
        <div className='receipt'>
            <h3>{props.value.person}</h3>
            <span>Main: {props.value.order.main}</span><br></br>
            <span>Protein: {props.value.order.protein}</span><br></br>
            <span>Rice: {props.value.order.rice}</span><br></br>
            <span>Sauce: {props.value.order.sauce}</span><br></br>
            <span>Drink: {props.value.order.drink}</span><br></br>
            <span>Cost: {props.value.order.cost}</span>
        </div>
    )
}

export default Receipts