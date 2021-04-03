import React, {  useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import {  useDispatch } from 'react-redux';
import * as Actions from '../../store/actions/index';

import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {


  const dispatch = useDispatch();



  const onInitLoadFruits = useCallback(
    () => dispatch(Actions.initLoadFruits()),
    [dispatch]
  );

  const onInitLoadVegetables = useCallback(
    () => dispatch(Actions.initLoadVegetables()),
    [dispatch]
  );

  useEffect(() => {
    onInitLoadFruits();
  },[onInitLoadFruits]);
    
  useEffect(() => {
    onInitLoadVegetables();
  },[ onInitLoadVegetables]);



    const [ sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

    const sideDrawerClosedHandler = () => {
        setSideDrawerIsVisible(false);
    }

    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisible(!sideDrawerIsVisible);
    }

   
 
        return (
            <React.Fragment>
                <Toolbar 
                      isAuth={props.isAuthenticated}  
                      drawerToggleClicked={sideDrawerToggleHandler} />
                <SideDrawer
                    isAuth={props.isAuthenticated}  
                    open={sideDrawerIsVisible}
                    closed={sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {props.children}
                </main>
            </React.Fragment>
        )
}


const mapStateToProps = state => {
    return{
         isAuthenticated: state.auth.token !== null

    };
};

export default connect(mapStateToProps)(Layout);


