import React, { Component,Fragment } from 'react'
import { FadeIn } from 'animate-components'
import { connect } from 'react-redux'
import { textComment } from '../../../../utils/comment-utils'
import AddEmojis from '../../../others/emojis/add-emojis'
import PrimaryButton from '../../../others/button/primary-btn'
import ModalBack from '../../../others/modal/modal-back'
import TextArea from '../../../others/input/textArea'
import Overlay from '../../../others/overlay'
import Stepper from 'react-stepper-horizontal'
import CommentWeight from './CommentWeight'
import FinalRecipient from './FinalRecipient'
import CommentPayment from './CommentPayment'
import CommentDone from './CommentDone'
import Notify from 'handy-notification'
import ToolTip from 'react-tooltip'
import { number, func, string } from 'prop-types'

@connect()
export default class TextCommentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      activeStep: 0,
      weight: 0,
      sexSender: '',
      nameSender: '',
      adressSender: '',
      phoneSender: '',
      ccname: '',
      ccnumber: '',
      ccexpiry: '',
      cccvc: '',
      commandNumber: '',
    }
  }

  componentDidMount () {
    // Adding TouchPay function requirement
    const script = document.createElement("script");

    script.src = "https://dev-touchpay.gutouch.com/touchpay/script/dev_touchpay-0.0.1.js";
    script.async = true;

    document.body.appendChild(script);
  }

  // Called function for InTouch Payment way
  calltouchpay() {
    sendPaymentInfos(this.state.commandNumber,
      'BAGO0847','dUr!RGP@m4w5rR*k3&7KLSNQICJoHde*IU_f53GV&zJO3tgja9',
      'BAGO.SN',  window.location.href,
      window.location.href, this.props.prixUnit*this.state.weight*656, // (find a module for doing conversion automatically)
      '', '', '', '', ''
    );
  }

  handleOnClickNext = () => {
    let nextStep=0;
    let {kilo} = this.props;
    if(this.state.activeStep===0)
    {
      var commentWeight=document.getElementById("commentWeight").value;
      var maxWeight=kilo;
      var numbCommentWeight=parseFloat(commentWeight);
      var numbMaxWeight=parseFloat(maxWeight);
      if (commentWeight==='')
      {
        Notify({ value: 'Veuillez remplir les champs marqués d\'un astérix!' });
      } else if (numbCommentWeight<=0)
      {
        Notify({ value: 'Le poids doit être positif!' });
      }
      else if (numbCommentWeight>numbMaxWeight)
      {
        Notify({ value: 'Le poids choisi ne peut pas être plus grand que le poids annoncé.' });
      }
      else
      {
        this.setState({weight: commentWeight});
        nextStep=1;
        this.setState({activeStep: nextStep});
      }
    }
    else if (this.state.activeStep===1)
    {
      var commentSexe="";
      if(document.getElementById("male").checked)
      {
        commentSexe="M";
      }else if (document.getElementById("female").checked)
      {
        commentSexe="F";
      }
      console.log(commentSexe);
      var commentName=document.getElementById("nomPrenom").value;
      var commentAdresse=document.getElementById("adresse").value;
      var commentTelephone=document.getElementById("telephone").value;
      if(commentSexe===''||commentName===''||commentAdresse===''||commentTelephone==='')
      {
        Notify({ value: 'Veuillez remplir les champs marqués d\'un astérix!' });
      }
      else {
        this.setState({sexSender: commentSexe});
        this.setState({nameSender: commentName});
        this.setState({adressSender: commentAdresse});
        this.setState({phoneSender: commentTelephone});
        // generating command_number
        this.genCmdNumber();
        nextStep=2;
        this.setState({activeStep: nextStep});
      }
    }
  };
  // Command_number generation
  genCmdNumber = () => {
    fetch('/gen-comment-number')
      .then(res => res.json())
      .then(value => {
        console.log(value);
        this.setState({ commandNumber: value.data });
      });
  };
  // Handle of back click
  handleOnClickBack = async () => {
    if (this.state.activeStep !== 0) {
      let prevStep = this.state.activeStep - 1;
      this.setState({ activeStep: prevStep });
    }
    // else {

    // }
  };
  descChange = e => this.setState({ text: e.target.value })

  comment = async e => {
    e.preventDefault();
    let { text,weight,sexSender,nameSender,adressSender,phoneSender,ccname,ccnumber,ccexpiry,cccvc, commandNumber } = this.state;
    let { back, incrementComments,prixUnit, ...rest } = this.props;
    console.log(commandNumber);
    textComment({
      text,
      weight,
      prixUnit,
      sexSender,
      nameSender,
      adressSender,
      phoneSender,
      ccname,
      ccnumber,
      ccexpiry,
      cccvc,
      commandNumber,
      ...rest,
      done: () => incrementComments(),
    });
    // Call of TouchPay API
    this.calltouchpay();
    back();
  }
  getStepContent= (step) => {
    let {kilo,prixUnit} = this.props;
    switch (step) {
      case 0:
        return <CommentWeight kilo={kilo} prixUnit={prixUnit}/>;
      case 1:
        return <FinalRecipient />;
      default:
        throw new Error('Unknown step');
  }
};

  render() {
    const size=22;
     const circleSize=12;
     const titleFontSize=12;
     const steps = [{title: 'Poids et Type du colis'},{title: 'Destinataire'}];
    let { text } = this.state
    let { back ,kilo,prixUnit} = this.props

    return (
      <div>
          <Overlay />
          <div className="post" style={{ left:'50%', width:'650px' }}>
            <FadeIn duration="300ms">
                              <main>
                                    <Fragment>
                                              <div align="center">
                                                  <font color="#ca1e26" face="Impact" size="3">  Envoyer un colis</font>
                                              </div>
                                                <Fragment>
                                                          <Stepper
                                                          activeColor="#ca1e26"
                                                          completeColor="#ca1e26"
                                                          activeTitleColor="#ca1e26"
                                                          size={size}
                                                          circleFontSize={circleSize}
                                                          titleFontSize={titleFontSize}
                                                          steps={steps}
                                                          activeStep={this.state.activeStep}
                                                          showNumber={true}
                                                          />
                                                          <Fragment>
                                                          <div>   {this.getStepContent(this.state.activeStep)}  </div>

                                    </Fragment>
                                               </Fragment>

                              </Fragment>
                              </main>
                              <div className="t_p_bottom p_bottom">
                                                                      <div
                                                                          className="t_p_tag p_tag"
                                                                        >
                                                                        </div>
                                                                    <div className="t_p_act p_act">
                                                                        <ModalBack back={back} btnType="secondary" onClick={this.handleOnClickBack} style={{  height:'30px' }} />
                                                                        <PrimaryButton
             label={this.state.activeStep === steps.length-1?'Accepter and Valider':'Suivant'}
             onClick={this.state.activeStep === steps.length-1?this.comment:this.handleOnClickNext}
             style={{  height:'30px' }}
  />
  </div>
</div>
                                        </FadeIn>
          </div>



          <ToolTip />
        </div>
    )
  }
}

TextCommentModal.propTypes = {
  post: number.isRequired,
  kilo: number.isRequired,
  prixUnit:number.isRequired,
  postOwner: number.isRequired,
  back: func.isRequired,
  incrementComments: func.isRequired,
  when: string.isRequired,
}
