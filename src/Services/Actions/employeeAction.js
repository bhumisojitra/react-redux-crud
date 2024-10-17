export const empAddData = (data) => {
    return{
        type : "AddEmployee",
        payload : data
    }
}

export const singleRec = (id) => {
    return{
        type : "Edit",
        payload : id
    }
}

export const updateRec = (upData) => {
    return{
        type : "Update",
        payload : upData
    }
}

export const deleteRec = (id) => {
    return{
        type : "Delete",
        payload : id
    }
}

export const roleRec = (category) => {
    return{
        type : "Role",
        payload : category
    }
}

const loading = () => {
    return{
        type : "Loading"
    }
}

export const thunk = (data) => {
    return (dispatch) => {
        dispatch(loading())

        // empAddData data mate
        setTimeout(() => {
            dispatch(empAddData(data))
        }, 2000)
    }
}

export const employeeAdd = () => {
    return (dispatch) => {
        dispatch(loading())
        
        setTimeout(() => {
            dispatch(empAddData())
        }, 2000)
    }
}

export const helper = () => {
    return JSON.parse(localStorage.getItem('employeeData')) || []
}