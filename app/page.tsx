import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/home3/section1";
import Section2 from "@/components/sections/home3/section2";
import Section3 from "@/components/sections/home3/section3";
import Section4 from "@/components/sections/home1/section2";
import Sectionfour from "@/components/sections/home1/section4";
import Section5 from "@/components/sections/home4/section11";
import Section6 from "@/components/sections/home1/section6";
import Section7 from "@/components/sections/home3/section7";
import Section8 from "@/components/sections/home3/section8";
import Section9 from "@/components/sections/home1/section9";

export default function Home() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={3}>
        <Section1 />
        <Section3 />
        <Section4 />
        <Sectionfour />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section2 />
        <Section5 />
      </Layout>
    </>
  );
}
