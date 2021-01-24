import React from "react";
import {
  Container,
  Row,
  Col,
  UncontrolledCarousel,
} from "reactstrap";

export default function ContactUs(){
    return(
        <>
        <div className="wrapper">
            <div className="page-header">
                <div className="section">
                    <Container>
                        <div className="title">
                        <h3>About </h3> 
                        </div>
                    </Container>
                    <div className="section">
                        <Container>
                            <h4>Not like most of the other fields of studies, Astronomy is not much favored among the Sri
                                Lankans. There are some school students and university under graduated who are engaging in
                                Astronomy through associations like Astronomical Societies in Schools and SEDS in universities.
                                But there is a huge vacancy in the software field to present a beginner’s guide to junior
                                students to enter the Astronomical field. Thus, we developed an application which will fulfill the
                                following four requirements,<br/></h4>

                                    • Details of the planets and stars<br/>
                                    • A lunar Calendar<br/>
                                    • A news page show casing the current trends and milestones in the field.<br/><br/>
                                <h4>
                                We expect to bring Astronomy closer to junior students, thus enrich our future generation with
                                new ideas and theories to excel in Astronomical field.</h4>
                        </Container>
                    </div>
                </div>
            </div>
        </div>


        </>

    );
}