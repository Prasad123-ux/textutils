import React from 'react'
import PropTypes from 'prop-types'
export default function Alert(props) {
    const capitalize=(word)=>{
        if(typeof(word)=="string"){
        const lower=word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return'';
};
  return (
    
     props.alert &&( <div className="alert alert-warning alert-dismissible fade show" role="alert">
 <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
     )
)}

Alert.propTypes = {
      alert: PropTypes.string.isRequired
}
