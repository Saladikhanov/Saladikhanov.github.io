import ContactForm from "./ContactForm";
import {
  ContactSection,
  Instagram,
  Linkedin,
  Phone,
  ContactWrapper,
  Link,
  Header,
  City,
  SocialWrapper,
  SocialLink,
  ContactFormWrapper,
} from "./ContactElements";
// import { NavLink } from 'react-router-dom'
function Contact() {
  return (
    <ContactSection>
      <ContactWrapper>
        {/* <Divider date="04/04" section="CONTACT" name="DARIA ZAFIRA" /> */}
        <Header>Let’s create something today!</Header>
        <City>Tel Aviv, Israel</City>
        <Link href="tel: +972 (50) 366 85 76">Phone: +972 (50) 366 85 76</Link>
        <br />
        <Link href="mailto: dariazefira@gmail.com">
          Email: dariazefira@gmail.com
        </Link>
        <SocialWrapper className="social_link_wrapper">
          <SocialLink href="https://www.linkedin.com/in/daria-zefira-a488581b5/">
            <Linkedin />
          </SocialLink>
          <SocialLink href="https://www.instagram.com/daria_zefira_design/">
            <Instagram />
          </SocialLink>
          <SocialLink href="tel: +972 (50) 366 85 76">
            <Phone />
          </SocialLink>
        </SocialWrapper>
      </ContactWrapper>
      <ContactFormWrapper className="contact_form_wrapper">
        <ContactForm />
      </ContactFormWrapper>
    </ContactSection>
  );
}
export default Contact;
