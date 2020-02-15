const initialState = {
    contacts: [{ fullName: 'Mike Houston', company: "No information provide", email: "mike@mail.com", address: "123, street, area, country", phone: 9087654321 }],
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
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
};