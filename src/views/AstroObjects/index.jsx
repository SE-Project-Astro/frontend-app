import React, { useCallback, useEffect } from 'react';
import CardWithImage from "../../components/CardWithImage";
import {Row, Container, Col} from 'reactstrap';
import {useHistory} from "react-router";

import { useSelector, useDispatch } from "react-redux";

import { selectAllAstroObjects, fetchAstroObjects } from "redux/slices/astroObjectSlice";

const Index = () => {
    const dispatch = useDispatch();
    const astroObjects = useSelector(selectAllAstroObjects)

    const astroObjectStatus = useSelector(state => state.astroObjects.status);

    // useEffect(() => {
    //     if(astroObjectStatus === 'idle') {
    //         dispatch(fetchAstroObjects())
    //     }
    // }, [astroObjectStatus, dispatch])

    const history = useHistory();
    const handleOnClick = useCallback((tag) => history.push(`/astro/${tag}`), [history])
    return (
        <React.Fragment>
            <section className="section section-lg">
                <section className="section">
                    <Container>
                        <button onClick={() => dispatch(fetchAstroObjects())}>Get Data</button>
                        <Row>
                            {astroObjects.map(astroObject => (
                                <Col key={astroObject.tag} xs="12" md="6" xl="4" onClick={() => handleOnClick(astroObject.tag)}>
                                    <CardWithImage
                                        image={astroObject.image}
                                        cardTitle={astroObject.desc}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
            </section>
        </React.Fragment>
    );
}

export default Index;