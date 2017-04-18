import React from 'react';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux';
import Loading from 'components/Loading';

export const UserCanAccount= UserAuthWrapper({
    authSelector: state => state.get('main'),
    redirectAction: routerActions.push,
    authenticatingSelector: state => { const main = state.get('main'); return main.get('isFetchingAccount'); },
    LoadingComponent: Loading,
    predicate: auth => !auth.get('fetchingError'),
    failureRedirectPath: '/forbidden',
    wrapperDisplayName: 'UserCanTeam',
    allowRedirectBack: false    
});

export const UserCanTeam = UserAuthWrapper({
    authSelector: state => state.get('main'),
    redirectAction: routerActions.push,
    authenticatingSelector: state => { const main = state.get('main'); return main.get('isFetchingAccount'); },
    LoadingComponent: Loading,
    predicate: auth => auth.getIn(['activeBrand', 'user_access','permissions']).indexOf('team') > -1 && !auth.get('fetchingError'),
    failureRedirectPath: '/forbidden',
    wrapperDisplayName: 'UserCanTeam',
    allowRedirectBack: false
  });

export const UserCanSettings = UserAuthWrapper({
    authSelector: state => state.get('main'),
    redirectAction: routerActions.push,
    authenticatingSelector: state => { const main = state.get('main'); return main.get('isFetchingAccount'); },
    LoadingComponent: Loading,
    predicate: auth => auth.getIn(['activeBrand', 'user_access','permissions']).indexOf('settings') > -1 && auth.getIn(['activeBrand', 'account_access', 'permissions']).indexOf('settings') > -1 && !auth.get('fetchingError'),
    failureRedirectPath: '/forbidden',
    wrapperDisplayName: 'UserCanSettings',
    allowRedirectBack: false
  });
  
export const UserCanStatistics = UserAuthWrapper({
    authSelector: state => state.get('main'),
    redirectAction: routerActions.push,
    authenticatingSelector: state => { const main = state.get('main'); return main.get('isFetchingAccount'); },
    LoadingComponent: Loading,
    predicate: auth => auth.getIn(['activeBrand', 'user_access','permissions']).indexOf('statistics') > -1 && auth.getIn(['activeBrand', 'account_access', 'permissions']).indexOf('statistics') > -1 && !auth.get('fetchingError'),
    failureRedirectPath: '/forbidden',
    wrapperDisplayName: 'UserCanStatistics',
    allowRedirectBack: false
})

export const UserCanConnections = UserAuthWrapper({
    authSelector: state => state.get('main'),
    redirectAction: routerActions.push,
    authenticatingSelector: state => { const main = state.get('main'); return main.get('isFetchingAccount'); },
    LoadingComponent: Loading,
    predicate: auth => auth.getIn(['activeBrand', 'user_access','permissions']).indexOf('connections') > -1 && auth.getIn(['activeBrand', 'account_access', 'permissions']).indexOf('connections') > -1 && !auth.get('fetchingError'),
    failureRedirectPath: '/forbidden',
    wrapperDisplayName: 'UserCanConnections',
    allowRedirectBack: false
})