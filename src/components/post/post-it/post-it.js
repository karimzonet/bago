import React, { Component,Fragment } from 'react'
import { FadeIn } from 'animate-components'
import Overlay from '../../others/overlay'
import ToolTip from 'react-tooltip'
import Filters from './filters/filters'
import PostItHeader from './header'
import AddTags from './add-tags'
import Middle from './middle'
import ToggleAddTags from './toggleAddTags'
import PostItActions from './actions'
import { func, oneOf, number } from 'prop-types'
import AddEmojis from '../../others/emojis/add-emojis'
import { CPP,resetPostIt } from '../../../actions/post'
import { connect } from 'react-redux'
import Stepper from 'react-stepper-horizontal'
import SecondaryButton from '../../others/button/secondary-btn'
import PrimaryButton from '../../others/button/primary-btn'
import Reservation from './Reservation'
import Luggage from './Luggage'
import Review from './Review'
import Terms from './Terms'
import Done from './Done'
import Generatecode from './Generatecode'
import Notify from 'handy-notification'

@connect(store => ({
  postIt: store.Post.postIt,
}))
export default class PostIt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      confirming: null,
    };
  }
  componentDidMount = () => {
    let { type, group, dispatch } = this.props
    dispatch(CPP('type', type))
    dispatch(CPP('group', group))
  };
  handleOnClickNext = () => {
    let nextStep = 0;
    if(this.state.activeStep===0)
    {
      var bookingNumber = document.getElementById("bookingNumber").value;
      localStorage.setItem('bookingNumber', bookingNumber);
      var code = (bookingNumber+' 1SN'+new Date().getTime()).toUpperCase();
      localStorage.setItem('eCode', code);
    if(document.getElementById("bookingNumber").value==='')
    {
      nextStep = 0;
      this.setState({activeStep: nextStep});
      Notify({ value: 'Veuillez remplir le champ Numéro de réservation.' });
    }
    else {
      nextStep=1;
      this.setState({activeStep: nextStep});
    }
    }
    else if(this.state.activeStep===1)
    {
      nextStep=2;
      this.setState({activeStep: nextStep});
    }
    else if(this.state.activeStep===2)
    {
    var kilo = document.getElementById("kilo").value;
    var numbKilo=parseFloat(kilo);
    var prixUnit = 8;
    var numbPrixUnit=parseFloat(prixUnit);
    var prixTotal = document.getElementById("prixTotal").value;
    var numbPrixTotal=parseFloat(prixTotal);
    var accompanied="false";
    if(document.getElementById("Yes").checked)
    {
      accompanied="true";
    }else if (document.getElementById("No").checked)
    {
      accompanied="false";
    }
    if (kilo===''||prixUnit==='')
    {
      nextStep=2;
      this.setState({activeStep: nextStep});
      Notify({ value: 'Veuillez remplir les champs marqués d\'un astérix!' });
    } else if (numbKilo<=0||numbPrixUnit<=0)
    {
      nextStep=2;
      this.setState({activeStep: nextStep});
      Notify({ value: 'Veuillez remplir les champs marqués d\'un astérix!' });
    }
    else {

    localStorage.setItem('prixUnit', prixUnit);
    localStorage.setItem('kilo', kilo);
    localStorage.setItem('prixTotal', prixTotal);
    localStorage.setItem('accompanied', accompanied);
    var iban = "";
    localStorage.setItem('iban', iban);
    console.log(localStorage.getItem('accompanied'));
    nextStep=3;
    this.setState({activeStep: nextStep});
    }
    }
    else if(this.state.activeStep===3)
    {
      nextStep=4;
      this.setState({activeStep: nextStep});
    }
  };
  BackAndReset = async (e) => {
    const { dispatch } = this.props;
    await dispatch(resetPostIt());
    back();
  }
  handleOnClickBack = async () => {
    if (this.state.activeStep === 0)
    {
      const { dispatch, back } = this.props;
      await dispatch(resetPostIt());
      back();
      this.BackAndReset();
    }else {
      let prevStep = this.state.activeStep - 1;
      this.setState({activeStep:prevStep});
    }
  };
  // Get confirming state from child component Generatecode
  getConfirmState = (conf) => {
    this.setState({confirming: conf});
  };

    getStepContent= (step) => {
      switch (step) {
        case 0:
          return <Reservation/>;
        case 1:
          return <Generatecode getConfirming = {this.getConfirmState} />;
        case 2:
          return <Luggage/>;
        case 3:
          return <Review/>;
        case 4:
            return <Done/>;
        // case 5:
        //   return <Done/>;
        default:
          throw new Error('Unknown step');
      }
     }

  render() {
    const size=22;
     const circleSize=12;
     const titleFontSize=12;
     const steps = [{title: 'Numéro Réservation'},{title: 'Statut'}, {title: 'Déclaration de bagage'}, {title: 'Récapitulatif'},{title: 'Résultat'}];
      let {
        postIt: { showOverlay },
        dispatch,
        back,
      } = this.props
    return (
      <div>
        <Overlay />
        <div className="post" style={{ left:'50%', width:'650px' }}>
          <FadeIn duration="300ms">
            <PostItHeader />
            <main>
              <Fragment>
                <div align="center">
                    <font color="#ca1e26" face="Impact" size="3">  Libérer de l'espace</font>
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
            {this.state.activeStep === steps.length-2
              ?
                <PostItActions back={back} />
                :
                this.state.activeStep===1  && this.state.confirming!==true
                  ?
                  <div className="t_p_act p_act">
                  <SecondaryButton label="Précédent"  onClick={this.handleOnClickBack} style={{  height:'30px' }}/>
                  </div>
                  :

                    <div className="t_p_act p_act">
                      <SecondaryButton label="Précédent"  onClick={this.handleOnClickBack} style={{  height:'30px' }}/>
                      <PrimaryButton
                        label="Suivant"
                        onClick={this.handleOnClickNext}
                        extraClass="p_post"
                        style={{  height:'30px' }}
                        />
                    </div>
            }
            </div>
          </FadeIn>
        </div>

        {showOverlay && <Overlay type="white" />}

        <ToolTip />
      </div>
    )
  }
}

PostIt.propTypes = {
  back: func.isRequired,
  type: oneOf(['user', 'group']).isRequired,
  group: number,
}
