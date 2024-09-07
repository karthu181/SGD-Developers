import Head from "../../components/reusable/head/Head";
import Layout from "../../components/reusable/layout/Layout";
import Navigation from "../../components/reusable/navigation/Navigation";
import Content from "../../sections/contact/Content";
import { homeBox, propertiesBox } from "../../utils/navigationData";

const Contact = () => {
  return (
    <>
      <Head
        title="Contact"
        description="Contact Form of SGD Developers Real-Estate"
      />

      <Layout isHeaderLight={false}>
        <main>
          <Content />

          {/* <Navigation boxOneValues={homeBox} boxTwoValues={propertiesBox} /> */}
        </main>
      </Layout>
    </>
  );
};

export default Contact;
