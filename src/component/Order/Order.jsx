import "./Order.scss";


import React, { useContext } from 'react'
import { Context } from "../Context/Context";
import Delete from "../../Libra/Svgs/Delete";
import { ModalContext } from "../Context/ModalContenxt";

function Order() {
    const {orders, setOrders} = useContext(Context);
    const {modal, setModal} = useContext(ModalContext);

    let sum = 0;
    for(let i of orders){
        sum = sum + i.money*i.number;
    }


    return (
        <>
            <h2 className="order__title">Orders #34562</h2>

            <div className="order__box">
                <button>Dine in</button>
                <button>To Go</button>
                <button>Delivery</button>
            </div>

            <div className="order__menu">
                <em>Item</em>
                <em>QTY</em>
                <em>Price</em>
            </div>
            
            <div className="orderList">
                {orders.length > 0 && <ul className="order__list">
                {orders.map(order => (
                    <li className="order__list-item" key={order.id}>
                        <div className="order__list-block">
                            <img src={order.img} alt="order-food" className="order__list-block-img" width={45} height={45} />
                            <div className="order__list-content">
                                <p>{order.title}</p>
                                <small>${order.money}</small>
                            </div>
                            <span className="order__list-num">
                                {order.number}
                            </span>
                            <span className="order__list-sum">
                                ${order.number * order.money}
                            </span>
                        </div>
                        <div className="order__list-bottom">
                                <input type="text" placeholder="Order note"/>
                                <button onClick={() => {
                                    setOrders(orders.filter(food => food.id !== order.id));
                                    order.number = 0;
                                }}>
                                    {<Delete />}
                                </button>
                        </div>
                    </li>
                ))}  
                </ul>}
            </div>

            <div className="order__result">
                <small className="order__result-text">Discount</small>
                <p>$0</p>
            </div>
            <div className="order__result">
                <small className="order__result-text">Sub total</small>
                <p>${sum}</p>
            </div>

            <button className="order__btn" onClick={() => {
                orders.length > 0 ? setModal(!modal) : setModal(false);
                
            }}>
                Continue to Payment
            </button>
        </>
    );
}

export default Order;
