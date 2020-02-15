
export const addContact = (contact) => {
    return {
        type: 'add',
        contact
    }
}

export const editContact = (contact) => {
    return {
        type: 'edit',
        contact
    }
}