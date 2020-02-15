const initialState = {
    contacts: [{id: 'adfs', fullName: 'Mike Houston', company: "No information provide", email: "mike@mail.com", address: "123, street, area, country", phone: 9087654321 }],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "add":
            let contacts = [...state.contacts];
            contacts.push(action.contact);
            return {
                ...state,
                contacts
            }
        case "edit":
            let index = state.contacts.findIndex((contact) => contact.id === action.contact.id);
            state.contacts.splice(index, 1, action.contact);
            return state ;
        default:
            return state;
    }
};