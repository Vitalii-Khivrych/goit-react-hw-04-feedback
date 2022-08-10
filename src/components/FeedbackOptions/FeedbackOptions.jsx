import PropTypes from 'prop-types';
import { OptionsWrap, OptionsButton } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <OptionsWrap>
      {options.map(option => (
        <OptionsButton
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </OptionsButton>
      ))}
    </OptionsWrap>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
