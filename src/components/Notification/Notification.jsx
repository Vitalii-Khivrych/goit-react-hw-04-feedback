import PropTypes from 'prop-types';
import styled from 'styled-components';

function Notification({ message }) {
  return (
    <>
      <Text>{message}</Text>
    </>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;

const Text = styled.p`
  font-size: 20px;
  text-align: center;
`;
