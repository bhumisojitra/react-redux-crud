import { helper } from "../Actions/employeeAction";

const initial = {
    employees : helper(),
    // employees : JSON.parse(localStorage.getItem('employeeData')) || [],
    employee : null,
    isLoading : false,
};

const employeeReducer = (state = initial, action) => {

    switch (action.type) {

        case "AddEmployee" :

            console.log("dataaaa : ", action.payload);

            const id = Math.floor(Math.random() * 1000);

            const data = { ...action.payload, id };
            
            const employeesData = [...state.employees, data];

            localStorage.setItem('employeeData', JSON.stringify(employeesData));

            return {
                ...state,
                employees: employeesData,
                isLoading: false,
                // employees : [...state.employees, action.payload]
            };

        case "Edit" :
            const singleData = action.payload;

            const singleRec = state.employees.find((item) => {
                return item.id === singleData
            }); 

            console.log("SINGLE :", singleRec);

            return {
                ...state,
                employee: singleRec || null,
            };

        case "Update" :

            const editData = action.payload;

            const update = state.employees.map((rec) => {
                if (rec.id === editData.id) {
                    return editData; 
                } else {
                    return rec;
                }
            });

            console.log("update : ", update);
            localStorage.setItem('employeeData', JSON.stringify(update))

            return {
                ...state,
                employees: update, 
                employee: null, 
            };
            
        case "Delete" : 

            const deleteRec = state.employees.filter((rec) => {
                return rec.id !== action.payload
            });

            console.log("deleteRec :", deleteRec);
            

            localStorage.setItem('employeeData', JSON.stringify(deleteRec))

            return {
                ...state,
                employees: deleteRec, 
                employee: null, 
            };

        case "Role" :  
             
            const roleData = action.payload;
            let roleRec;
        
            if (roleData) {
                roleRec = helper().filter((rec) =>
                    rec.role.toLowerCase() === roleData.toLowerCase()  // rec.role ==== role e main state ma role name ni key 6e te 6e..
                )
            }
            else{
                roleRec = helper()
            }
            console.log("roleRec :", roleRec);

            return{
                ...state,
                employees : roleRec
            }

        case "Loading" :
            return{
                ...state,
                isLoading : true
            }
            

        default:
            return state;
    }
};

export default employeeReducer;
