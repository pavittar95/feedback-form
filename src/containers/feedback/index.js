import React, { Component } from "react";
import RatingBar from "../../components/ratingBar";
import TextareaAutosize from "react-textarea-autosize";

import "./feedback.scss";
import RestClient from "../../config/restClient";

export default class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderComment: "",
      orderRating: "",
      experience: undefined,
      items: []
    };
    this.setExperience = this.setExperience.bind(this);
  }
  componentDidMount() {
    // FETCH ORDER LISTING API CALL
    // RestClient.get('/order').then(result=> console.log(result));
  }

  handleFeedback(orderComment) {
    this.setState({ orderComment });
  }

  setExperience(experience) {
    this.setState({ experience });
  }

  submit() {
    const { orderComment, experience } = this.state;
    // UNCOMMENT TO CALL API HERE
    // let body = {
    //   orderID: 301,
    //   comment: orderComment,
    //   ratingPercent: 60,
    //   ratingBase: 5,
    //   itemFeedback: [
    //     {
    //       itemID: 3,
    //       comment: "gooditem",
    //       ratingPercent: 20,
    //       ratingBase: 5
    //     },
    //     {
    //       itemID: 4,
    //       comment: "baditem",
    //       ratingPercent: 100,
    //       ratingBase: 5
    //     }
    //   ]
    // };
    // RestClient.post("order/feedback", body).then(result => {
    this.props.history.push(`/feedback/${experience}`);
    // });
  }

  render() {
    const { orderComment, experience } = this.state;
    console.log(experience);

    return (
      <div className="row">
        <div className="col-12">
          <div className="col-12">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="m-t-60 text-center">
                <p className="question">01. How was the experience?</p>
                <RatingBar setRating={this.setExperience} />
              </div>
              <div className="comment-section">
                <TextareaAutosize
                  className="comment"
                  maxRows={4}
                  placeholder="Tell us more about it..."
                />
              </div>
            </div>
          </div>
          <hr className="margin-row-reverse separator" />
          <div className="col-12">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="m-t-60 text-center">
                <p className="question">02. How about chole bhature?</p>
                <RatingBar setRating={() => {}} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-6 mt-5 pt-5 mx-auto text-center">
          <button
            className="site-btn-primary ripple"
            disabled={!experience}
            onClick={() => this.submit()}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
