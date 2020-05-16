// ACTION CREATOR: People dropping off a form (creating form)

// Create policy form
const createPolicy = (name, amount) => {
    return { //Action (the form)
        type: 'CREATE_POLICY',
        payload: {
            name: name,
            amount: amount
        }
    }
}
// Delete policy form
const deletePolicy = (name) => {
    return { //Action (the form)
        type: 'DELETE_POLICY',
        payload: {
            name: name
        }
    }
}
// Create claim form
const createClaim = (name, amountToCollect) => {
    return { //Action (the form)
        type: 'CREATE_CLAIM',
        payload: {
            name: name,
            amountToCollect: amountToCollect
        }
    }
}

// REDUCERS: functions that model the departments

// Claims History Department
const claimsHistory = (oldListOfClaims = [], action) => {
    // gets passed old list of claims and based on action update 
    if (action.type === 'CREATE_CLAIM') { // we care about this action
        // takes list of claims and new record to a NEW array
        return [...oldListOfClaims, action.payload];
    }
    // dont care about the action
    return oldListOfClaims;
};

// Accounting Department
const accounting = (bagOfMoney = 100, action) => {
    // gets passed old list of claims and based on action update 
    if (action.type === 'CREATE_CLAIM') {
        return bagOfMoney - action.payload.amountToCollect;
    } else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount;
    }
    return bagOfMoney;
};

// Policies Department
const policies = (listOfPolicies =[], action) => {
    // gets passed old list of claims and based on action update 
    if (action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload.name];
    } else if (action.type === 'DELETE_POLICY') {
        // filter removes the item with given name
        return listOfPolicies.filter(name => name !== action.payload.name);
    }
    return listOfPolicies;
};

// REDUX STORE: assembly of all actions and reducers
const {createStore, combineReducers} = Redux;

const ourDepartments = combineReducers({
    accounting: accounting,
    claimsHistory:claimsHistory,
    policies: policies
});

const store = createStore(ourDepartments);

// form receiver sends action to each reducer to process
store.dispatch(createPolicy('Amy',20));
store.dispatch(createPolicy('Jim',30));
store.dispatch(createPolicy('Bob',10));

store.dispatch(createClaim('Amy',120));
// get access to the central repository
console.log(store.getState());