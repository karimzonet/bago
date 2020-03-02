import React, { Component } from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import { addPost } from '../../../utils/post-utils'
import { CPP, resetPostIt } from '../../../actions/post'
import SecondaryButton from '../../others/button/secondary-btn'
import PrimaryButton from '../../others/button/primary-btn'
export  class PostItActions extends Component {
  constructor(props) {
              super(props);
              this.state = {

              }
          };

          componentDidMount = () => {
            let {back,group_name,postIt: { showOverlay, ...rest },dispatch,} = this.props;
                };

  toggleOverlay= () => {
      let {postIt: { showOverlay, ...rest },dispatch} = this.props;
      dispatch(CPP('showOverlay', !showOverlay));
                        }
   BackAndReset= async(e) => {
                             e ? e.preventDefault() : null
                                let {back,group_name,postIt: { showOverlay, ...rest },dispatch,} = this.props;
                               await dispatch(resetPostIt());
                               back();
                                    }
   postIt= async(e) => {
                        let {back,group_name,postIt: { showOverlay, ...rest },dispatch,} = this.props;
                       e.preventDefault();
                       this.toggleOverlay();
                       await addPost({
                           dispatch,
                           ...rest,
                           group_name,
                         });
                         this.toggleOverlay();
                         this.BackAndReset();

                       }

                       render() {
                         return (
                           <div className="t_p_act p_act">
                             <SecondaryButton label="Précédent" onClick={this.BackAndReset} />
                             <PrimaryButton
                               label="Accepter and Valider"
                               onClick={this.postIt}
                               extraClass="p_post"
                             />
                           </div>
                         );
                       }
                     }






PostItActions.propTypes = {
  back: func.isRequired,
}

const mapStateToProps = state => ({
  group_name: state.Group.group_details.name,
  postIt: state.Post.postIt,
})

export default connect(mapStateToProps)(PostItActions)
export { PostItActions as PurePostItActions }
