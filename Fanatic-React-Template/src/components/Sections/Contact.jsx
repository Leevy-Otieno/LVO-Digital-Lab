import React, { useState } from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({ fname: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <Wrapper id="contact" $darkMode={darkMode}>
      <InnerContainer $darkMode={darkMode}>
        <div className="container">
          <HeaderInfo $darkMode={darkMode}>
            <h1 className="font40 extraBold">Let's Get in Touch</h1>
            <p className="font13">
              Have a project in mind or want to collaborate? Fill out the form below
              <br />
              and our team will get back to you within 24 hours.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "50px", alignItems: "center" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form onSubmit={handleSubmit} $darkMode={darkMode}>
                <label className="font13">First Name</label>
                <input 
                  type="text" 
                  id="fname" 
                  name="fname" 
                  value={formData.fname}
                  onChange={(e) => setFormData({...formData, fname: e.target.value})}
                  placeholder="Enter your name"
                  required 
                />

                <label className="font13">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="name@example.com"
                  required 
                />

                <label className="font13">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  placeholder="Project Inquiry / Collaboration"
                  required 
                />

                <label className="font13">Your Message</label>
                <textarea 
                  rows="4" 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your project goals..."
                  required 
                />

                <SumbitWrapper>
                  <ButtonInput type="submit" value={submitted ? "Message Sent! ✓" : "Send Message"} className="pointer animate radius8" />
                </SumbitWrapper>
              </Form>
            </div>
            
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 hidden-xs">
              <ImagesWrapper>
                <ColumnFlex>
                  <ContactImgBox>
                    <img src={ContactImg1} alt="workspace collaboration" className="radius6 glow-img" />
                  </ContactImgBox>
                  <ContactImgBox>
                    <img src={ContactImg2} alt="creative team meeting" className="radius6 glow-img" />
                  </ContactImgBox>
                </ColumnFlex>
                <ColumnSingle>
                  <ContactImgBox style={{ marginTop: "60px" }}>
                    <img src={ContactImg3} alt="modern office interior" className="radius6 glow-img" />
                  </ContactImgBox>
                </ColumnSingle>
              </ImagesWrapper>
            </div>
          </div>
        </div>
      </InnerContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  background-color: ${(props) => (props.$darkMode ? "#0f0a1e" : "#ffffff")};
  transition: background-color 0.3s ease;
`;

const InnerContainer = styled.div`
  background-color: ${(props) => (props.$darkMode ? "#0f0a1e" : "#f8fafc")};
  padding: 20px 0;
  transition: background-color 0.3s ease;
`;

const HeaderInfo = styled.div`
  padding: 60px 0 20px 0;
  text-align: center;

  h1 {
    color: ${(props) => (props.$darkMode ? "#ffffff" : "#0f172a")};
    margin-bottom: 15px;
  }

  p {
    color: ${(props) => (props.$darkMode ? "#94a3b8" : "#64748b")};
    line-height: 1.6;
  }
`;

const Form = styled.form`
  padding: 30px 0;
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: ${(props) => (props.$darkMode ? "#cbd5e1" : "#334155")};
    letter-spacing: 0.5px;
  }

  input,
  textarea {
    width: 100%;
    background-color: ${(props) => (props.$darkMode ? "#140d2b" : "#ffffff")};
    color: ${(props) => (props.$darkMode ? "#ffffff" : "#0f172a")};
    border: 1px solid ${(props) => (props.$darkMode ? "rgba(139, 92, 246, 0.3)" : "#cbd5e1")};
    border-radius: 8px;
    outline: none;
    padding: 12px 16px;
    font-size: 15px;
    margin-bottom: 24px;
    transition: all 0.2s ease-in-out;

    &:focus {
      border-color: #a855f7;
      box-shadow: 0 0 12px rgba(168, 85, 247, 0.25);
    }
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }

  @media (max-width: 860px) {
    padding: 10px 0;
  }
`;

const SumbitWrapper = styled.div`
  width: 100%;
`;

const ButtonInput = styled.input`
  border: 1px solid #7c3aed !important;
  background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%) !important;
  width: 100%;
  padding: 14px !important;
  outline: none;
  color: #fff !important;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.4);
  transition: all 0.2s ease-in-out;

  &:hover {
    background: linear-gradient(135deg, #6d28d9 0%, #9333ea 100%) !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(168, 85, 247, 0.6);
  }
`;

const ImagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  .glow-img {
    width: 100%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(139, 92, 246, 0.2);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.03);
    }
  }
`;

const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const ColumnSingle = styled.div`
  width: 50%;
`;

const ContactImgBox = styled.div`
  max-width: 200px;
  margin-bottom: 20px;
`;