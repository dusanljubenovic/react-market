import React, {  useCallback } from 'react';
import {  useSelector, useDispatch } from 'react-redux';
import * as Actions from '../../store/actions/index';

import Items from  '../Items/Items';
import classes from '../Fruits/Fruits.module.css';

const Vegetables = props => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(state => state.auth.token !== null);

  const onInitPurchase = useCallback(
    () => dispatch(Actions.purchaseInit()),
    [dispatch]
);

const purchaseHandler = () => {
 
  if (isAuthenticated) {
  
    onInitPurchase();
    props.history.push('/checkout');

  }
  else{

    props.history.push('/auth');
  
  }

};

  return (
    <div className="App">
        <h2>Order vegetables:</h2>
        
        <div className={classes.HolderTable}>
         <Items type="vegetables" ordered={purchaseHandler} isAuth={isAuthenticated}/>
        </div>
    
    </div>
  );
}

export default Vegetables;