import "./FormActions.css";

const FormActions = () => {
  return (
    <p className="actions">
      <button type="reset" className="buttonAlt">
        Reset
      </button>
      <button type="submit" className="button">
        Calculate
      </button>
    </p>
  );
};

export default FormActions;
