import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
function Footer() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="success">
      <MDBContainer className="p-4">


        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">COMPANY</h5>

              <ul className="list-unstyled mb-0">
                <li>About Us</li>
                <li>Team</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">contact</h5>

              <ul className="list-unstyled mb-0">
                <li>Help & Support</li>
                <li>Partner with us</li>
                <li>Ride with us</li>
                <li>
                  <a href="#!" className="text-white">
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">legal</h5>

              <ul className="list-unstyled mb-0">
                <li>Terms & Conditions</li>
                <li>Refund & Cancellation</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Offer terms</li>
                <li>Phishing & fraud</li>
                <li>Corporate - Money Codes Terms & Conditions</li>
                <li>Corporate - Discount Voucher Terms and Conditions</li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" className="mb-4"/>
              <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"/>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a className="text-white" href="#">
          Food App
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
