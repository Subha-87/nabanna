import React from 'react'

function Alert(props) {

  const captialize = (word) => {
       const lower = word.toLowerCase();
       return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    props.alertmsg && <div className={`alert alert-${props.alertmsg.type} alert-dismissible fade show`} role="alert">
  <strong>{captialize(props.alertmsg.type)}</strong> : {props.alertmsg.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}

export default Alert

