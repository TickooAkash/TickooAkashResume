import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import emailjs from "emailjs-com";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      successMessage: ""
    };
  }
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;

    function myFunction() {
      console.log("hello world"); // The function returns the product of p1 and p2
    }

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form
                onSubmit={this.handleSubmit.bind(this)}
                method="post"
                id="contactForm"
                name="contactForm"
              >
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactName"
                      name="contactName"
                      value={this.state.name}
                      onChange={this.onNameChange.bind(this)}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      value={this.state.email}
                      onChange={this.onEmailChange.bind(this)}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">
                      Subject <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      value={this.state.subject}
                      onChange={this.onSubjectChange.bind(this)}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      name="contactMessage"
                      value={this.state.message}
                      onChange={this.onMessageChange.bind(this)}
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit" >Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                  <h4 color="#ffffff">{this.state.successMessage}</h4>
                </fieldset>
                
              </form>
              
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  <br />
                  {street} <br />
                  {city}, {state} {zip}
                  <br />
                  <span>{phone}</span>
                </p>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onSubjectChange(event) {
    this.setState({ subject: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_grz6zeg",
        "template_g67axhd",
        e.target,
        "TkeiYiy3ORS4_Pw9Q"
      )
      .then((res) => {
        console.log(res);
        this.setState({ name: "", email: "", message: "", subject: "" ,successMessage:"Your message was sent, thank you!"});
      })
      .catch((err) => console.log(err));
  }
}

export default Contact;
