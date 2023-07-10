import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName ,increase } from "../store/userSlice.js";
import {changeCnt} from '../store.js';


function Cart(){

    let state = useSelector((state)=>{return state})
    console.log(state);
    let dispatch = useDispatch();
    return (
        <div>
            {state.user.name} {state.user.age}의 장바구니
            <button onClick={()=>{
                dispatch(increase(100));
            }}>버튼</button>
        <Table>
            <thead>
                <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                {state.cartList.map((item,idx)=>{
                return (
                <tr key={idx}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.count}</td>
                    <td>
                        <button onClick={()=>{
                            // dispatch(changeName())
                            
                            dispatch(changeCnt(item.id))
                        }}>+</button>
                    </td>
                </tr>)
                })}
            </tbody>
        </Table> 
        </div>
    )
}

export default Cart;