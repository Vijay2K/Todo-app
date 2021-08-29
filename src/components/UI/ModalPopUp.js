import React, { useState } from 'react'
import { Modal, Backdrop, Fade } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import './ModalPopUp.css'
import db from '../../firebase'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '50%',
    margin: '15px auto',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    borderRadius: '6px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

const ModalPopUp = (props) => {
  const classes = useStyles()

  const [newInput, setNewInput] = useState('')

  const changeHandler = () => {
    setNewInput('')
    props.onClose()
    if (newInput.trim().length === 0) {
      return
    }

    db.collection('todo').doc(props.id).set(
      {
        text: newInput,
      },
      { merge: true },
    )
    // console.log(newInput)
    // props.onEdit(newInput)
    // props.onHasEdited(true)
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      classes={classes.modal}
      open={props.onOpen}
      onClose={props.onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.onOpen}>
        <div className={classes.paper}>
          <h2 style={{ margin: '-5px 0 20px 0' }}>Enter your changes</h2>
          <input
            className="input"
            style={{ width: '100%', padding: '0.5rem', fontSize: '16px' }}
            type="text"
            placeholder={props.todo}
            value={newInput}
            onChange={(e) => setNewInput(e.target.value)}
          />
          <button className="btn" onClick={changeHandler}>
            Change
          </button>
        </div>
      </Fade>
    </Modal>
  )
}

export default ModalPopUp
