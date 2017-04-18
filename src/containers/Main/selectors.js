import { createSelector } from 'reselect';

const selectDashboard = (state) => state.get('main');

const makeSelectMenuCollapsed = () => createSelector(
   selectDashboard,
    (dashboard) => dashboard.get('menuCollapsed')
);

const makeSelectCurrentAccount = () => createSelector(
    selectDashboard,
    (dashboard) => { if (dashboard.get('activeBrand')) { return dashboard.get('activeBrand').toJS(); } return dashboard.get('activeBrand'); }
);

const makeSelectAccountPermissions = () => createSelector(
    selectDashboard,
    (dashboard) => dashboard.getIn(['activeBrand', 'account_access', 'permissions'])
);

const makeSelectAccountConnections = () => createSelector(
    selectDashboard,
    (dashboard) => dashboard.getIn(['activeBrand', 'connections'])
);

export {
    makeSelectMenuCollapsed,
    makeSelectCurrentAccount,
    makeSelectAccountPermissions,
    makeSelectAccountConnections,
};
