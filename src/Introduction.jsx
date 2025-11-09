import Header from "./Header";
import Footer from "./Footer";
export default function Introduction() {
    return (
        <>
            <Header />
            <main>
                <h2>Introduction</h2>
                <hr/>
                <h2>Preston Malone Murray</h2>
                <figure>
                    <img className="prom-pic" src="images/image_123650291.JPG" alt="Me at 2023 Prom" />
                    <figcaption>Me at 2023 Prom</figcaption>
                </figure>
                <hr/>
                <h3>Personal Background</h3>
                <p>I was born in Ohio, but moved to North Carolina when I was three.</p>
                <hr/>
                <h3>Professional Background</h3>
                <p>I worked at a pizza place in high school, and am now currently a TA for ITSC 3688.</p>
                <hr/>
                <h3>Academic Background</h3>
                <p>I earned a certification in Criminal Justice Technology in high school, and am now a junior majoring in computer science.</p>
                <hr/>
                <h3>Current Courses</h3>
                <ul>
                    <li>ITIS 3135</li>
                    <li>ITIS 3246</li>
                    <li>ECON 2101</li>
                    <li>AMST 3050</li>
                    <li>SOCY 1101</li>
                    <li>ITSC 3688 - TA</li>
                </ul>
                <hr/>
                <h3>Memorable Personal Item</h3>
                <p>I can snap my fingers without using my thumbs</p>
            </main>
                
            <Footer />
        </>
    );
}
