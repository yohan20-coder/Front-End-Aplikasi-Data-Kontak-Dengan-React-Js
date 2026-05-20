import Swal from "sweetalert2"


export const alertSuccess = (message) => {
    return Swal.fire({
        icon: 'success',
        title: 'Success',
        text: message,
    });
}

export const alertError = (message) => {
    return Swal.fire({
        icon: 'error',
        title: 'Ups',
        text: message,
    });
}
