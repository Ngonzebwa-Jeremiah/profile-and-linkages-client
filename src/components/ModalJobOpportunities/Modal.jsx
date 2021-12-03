import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ModalCss from "./Modal.module.css";
import { ButtonFilled, ButtonOutlined } from '../Button/Button';
import OpportunityCard from '../Opportunity/OpportunityCard';
import opportStyles from "../../styles/body/AllOpportunities.module.css";
import CardStyles from "../Opportunity/Opportunity.module.css";
import Link from 'next/link'
// import TitleRight from '../TitleRight/TitleRight';


const opport = [
  {
    key: "1",
    jobTitle: "Junoir Fronted",
    company: "Outbox Uganda",
    location: "Kampala",
    paragraph:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,  slightly believable. If you are going to use a passage of Lorem Ipsum",
    deadline: "21/08/2021",
  },
  {
    key: "1",
    jobTitle: "exc Fronted",
    company: "Outbox Uganda",
    location: "Kampala",
    paragraph:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,  slightly believable. If you are going to use a passage of Lorem Ipsum",
    deadline: "21/08/2021",
  },
];


function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    // const top = 50 + rand();
    // const left = 50 + rand();
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: 'translate(-50%, -50%)',
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      // display:"flex",
      // width: 400,
    //   backgroundColor: theme.palette.background.paper,
      backgroundColor: '#E5E5E5',

    //   border: '2px solid #000',
      // boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      height:'100%',
      // width:'100%',
      
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
      // <div style={modalStyle} className={classes.paper}>
      //   <h2 id="simple-modal-title"> {props.title}</h2>
      //   <p id="simple-modal-description">
      //    {props.body}
      //   </p>
      //   <div  className={ModalCss.modalButtons}>
      //   <ButtonFilled text = {props.yes} onClick={handleClose}/>
      //   <ButtonOutlined  text = {props.no} />
      //   </div>

<div style={modalStyle} className={classes.paper}>
        <div className={ModalCss.ModalBody} onClick={handleOpen}>
      <p className={CardStyles.jobTitle}>{props.jobTitle}</p>
      <div className={CardStyles.companyDetails}>
      <h5>company</h5>
        <p className={CardStyles.company}>{props.company}</p>
      <h5>location</h5>
        <p className={CardStyles.location}>{props.location}</p>
      </div>
      <h5>JobDescription</h5>
      <p className={CardStyles.paragraph}>{props.JobDescription}</p>
      <h5>requiredQualifications</h5>
      <p className={CardStyles.paragraph}>{props.requiredQualifications}</p>
      <h5>jobCategories</h5>
      <p className={CardStyles.paragraph}>{props.jobCategories}</p>

      <p className={CardStyles.deadline}>Deadline: {props.deadline}</p>
    </div>

        {/* <ModalComp /> */}
        <Link href="/jobapplicationform" passHref>
      <ButtonFilled text = {props.label} onClick={handleClose}/>
        </Link>

        </div>  
        

    )
    const ModalCard = (
      <div className={CardStyles.card} onClick={handleOpen}>
      <p className={CardStyles.jobTitle}>{props.jobTitle}</p>
      <div className={CardStyles.companyDetails}>
        <p className={CardStyles.company}>{props.company}</p>
        <p className={CardStyles.location}>{props.location}</p>
      </div>
      <p className={CardStyles.paragraph}>{props.JobDescription}</p>
      <p className={CardStyles.deadline}>Deadline: {props.deadline}</p>
    </div>
    )

    return (
        <div className={ModalCss.wrapper}>
         
         
          {ModalCard}
         {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
         {/* <ButtonFilled text = {props.label} onClick={handleOpen}/> */}
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
