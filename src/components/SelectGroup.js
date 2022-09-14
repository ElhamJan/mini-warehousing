import Select from "react-select";

const SelectGroup = (props) => {
  const options = props.groups.map((g) => {
    return { value: g.text, label: g.text };
  });

  return (
    <div>
      <Select
        className="select"
        options={options}
        placeholder="Product group..."
        onChange={props.onChange}
        value={props.selectOption}
      />
    </div>
  );
};

export default SelectGroup;
