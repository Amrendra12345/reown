
import Select from 'react-select'

const Selectbox = (props) => {
    const customStyles = {
        control: base => ({
          ...base,          
          fontFamily: "Muli",
          fontSize: "13px",
          borderRadius:0,
          margin:0,
          paddingTop: 2,
          lineHeight:2
        }),
        menu: base => ({
          ...base,         
          fontFamily: "Muli",
          fontSize: "13px",
          borderRadius:0,
          padding: 2,
          margin:0,
        }),
        menuList: (base) => ({
            ...base,
            maxHeight: "220px",
            "::-webkit-scrollbar": {
              width: "4px",
              height: "0px",
            },
            "::-webkit-scrollbar-track": {
              background: "#f1f1f1"
            },
            "::-webkit-scrollbar-thumb": {
              background: "#888"
            },
            "::-webkit-scrollbar-thumb:hover": {
              background: "#555"
            }
         
        })
      };
    
  return (
    <>
      <Select options={props.options} ans_param_name={props.ans_param_name} styles={customStyles} onChange={props.onChangeHandler} placeholder={props.defaultValue} />
    </>
  )
}

export default Selectbox;