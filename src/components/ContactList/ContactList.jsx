import PropTypes from 'prop-types';

import { FriendList, ContactItem, Friend, BtnDelete } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <FriendList>{contacts.map(({id, name, number}) => (
            <ContactItem key={id}>
                <Friend>{name}: {number}</Friend>
                <BtnDelete type="button" onClick={() => onDeleteContact(id)}>Delete</BtnDelete>
            </ContactItem>
        ))}
        </FriendList>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
};