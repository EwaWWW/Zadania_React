import contacts from '../components/Contacts';

const initialState = {
    data: contacts
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case 'REMOVE':
            return {
            data:state.data.filter(contact => contact.id !== action.id)
            };
        case 'ADD CONTACT':
            return {
                ...state,
                data: state.data.concat({
                    id: Date.now().toString(32),
                    name: action.name,
                    hone: action.phone,
                    email: action.email,
                    category: action.category
                })
            };
        default:
            return state
    }
}