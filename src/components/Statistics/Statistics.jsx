import PropTypes from 'prop-types';
import styled from 'styled-components';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <Text>Good: {good}</Text>
      <Text>Neutral: {neutral}</Text>
      <Text>Bad: {bad}</Text>
      <Text>Total: {total}</Text>
      <Text>Positive feedback: {`${positivePercentage}%`}</Text>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

const Text = styled.p`
  font-size: 16px;
  font-weight: 500;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
