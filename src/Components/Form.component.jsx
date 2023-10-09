const Form = ({
  handleSubmit,
  handleChange,
  titlePlaceholder,
  titleValue,
  labelPlaceholder,
  labelValue,
  submitValue,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title :
        <input
          type="text"
          name="title"
          placeholder={titlePlaceholder}
          value={titleValue}
          onChange={handleChange}
        />
      </label>
      <label>
        Label:
        <input
          type="text"
          name="label"
          placeholder={`${labelPlaceholder} (Optional)`}
          value={labelValue}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value={submitValue} />
    </form>
  );
};

export default Form;
