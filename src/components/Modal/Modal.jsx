import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ModalCss from "./Modal.module.css";
import { ButtonFilled, ButtonOutlined } from '../Button/Button';
import TitleRight from '../TitleRight/TitleRight';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
    //   backgroundColor: theme.palette.background.paper,
      backgroundColor: '#E5E5E5',

    //   border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


function ModalComp(props) {


    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("");
    // setName(props.name)

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
  //MODAL BODY
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title"> {props.title}</h2>
        <p id="simple-modal-description">
         {props.body}
        </p>
        <div  className={ModalCss.modalButtons}>
        <ButtonFilled text = {props.yes} onClick={handleClose}/>
        <ButtonOutlined  text = {props.no} onClick={handleClose}/>
        </div>
        {/* <ModalComp /> */}
        
      {/* <ButtonFilled text = "close" onClick={handleClose}/> */}

        </div>  

    )
    const ModalButton = (
      <ButtonFilled text = {props.label} onClick={handleOpen}/>
    )

    return (
        <div className={ModalCss.wrapper}>
         
         

         {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
         <ButtonFilled text = {props.label} onClick={handleOpen}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>


         
        </div>
      )
    }

export default ModalComp
