import React from "react";

const News = ({ match }) => {
  const { newsId } = match.params;

  const content = `<p><span >&nbsp;A planet is an astronomical body orbiting a star or stellar remnant that is massive enough to be rounded by its own gravity, is not massive enough to cause thermonuclear fusion, and – according to the International Astronomical Union but not all planetary scientists – has cleared its neighbouring region of planetesimals.[b][1][2]<br>

        The term planet is ancient, with ties to history, astrology, science, mythology, and religion. Apart from Earth itself, five planets in the Solar System are often visible to the naked eye. These were regarded by many early cultures as divine, or as emissaries of deities. As scientific knowledge advanced, human perception of the planets changed, incorporating a number of disparate objects. In 2006, the International Astronomical Union (IAU) officially adopted a resolution defining planets within the Solar System. This definition is controversial because it excludes many objects of planetary mass based on where or what they orbit. Although eight of the planetary bodies discovered before 1950 remain "planets" under the current definition, some celestial bodies, such as Ceres, Pallas, Juno and Vesta (each an object in the solar asteroid belt), and Pluto (the first trans-Neptunian object discovered), that were once considered planets by the scientific community, are no longer viewed as planets under the current definition of planet.<br>

        The planets were thought by Ptolemy to orbit Earth in deferent and epicycle motions. Although the idea that the planets orbited the Sun had been suggested many times, it was not until the 17th century that this view was supported by evidence from the first telescopic astronomical observations, performed by Galileo Galilei. About the same time, by careful analysis of pre-telescopic observational data collected by Tycho Brahe, Johannes Kepler found the planets' orbits were elliptical rather than circular. As observational tools improved, astronomers saw that, like Earth, each of the planets rotated around an axis tilted with respect to its orbital pole, and some shared such features as ice caps and seasons. Since the dawn of the Space Age, close observation by space probes has found that Earth and the other planets share characteristics such as volcanism, hurricanes, tectonics, and even hydrology.<br>

        Planets in the Solar System are divided into two main types: large low-density giant planets, and smaller rocky terrestrials. There are eight planets in the Solar System according to the IAU definition.[1] In order of increasing distance from the Sun, they are the four terrestrials, Mercury, Venus, Earth, and Mars, then the four giant planets, Jupiter, Saturn, Uranus, and Neptune. Six of the planets are orbited by one or more natural satellites.</span><br></p>`;

  /*const astroObject = useSelector((state) =>
      state.astroObjects.find((astroObject) => astroObject.id === astroObjectId)
    );*/

  return (
    <React.Fragment>
      {/* <section className="section section-lg">
        <section className="section">
          <Container>
            <Row>
              <Col>
                <CardWithImage
                  image={astroObject.image}
                  headingType="h2"
                  height="520px"
                  cardTitle={astroObjectId.cardTitle}
                  isInList={false}
                />
              </Col>
            </Row>
            <div style={({ backgroundColor: "white" }, { color: "white" })}>
              {htmlToReact(content)}
            </div>
            <div className="mt-5">
              <h3> 2 Comments</h3>
              <form>
                <FormGroup>
                  <Label style={{ color: "white" }} for="userComment">
                    User Name
                  </Label>
                  <Input
                    type="textarea"
                    name="text"
                    id="userComment"
                    placeholder="Add a public comment..."
                  />
                </FormGroup>
                <div className="text-right">
                  <Button color="secondary">Cancel</Button>
                  <Button color="primary" type="submit">
                    Comment
                  </Button>
                </div>
              </form>
              <div>
                <Row className="mt-3">
                  <strong style={{ color: "white" }}>User name 1</strong>
                  <div className="ml-2">1 month ago</div>
                </Row>
                <Row>
                  <p className="mt-2 ml-4">
                    The HTML element defines text with strong importance. The
                    content inside is typically displayed in bold.
                  </p>
                </Row>
                <Row className="mt-3">
                  <strong style={{ color: "white" }}>User name 2</strong>
                  <div className="ml-2">1 month ago</div>
                </Row>
                <Row>
                  <p className="mt-2 ml-4">
                    The HTML element defines text with strong importance. The
                    content inside is typically displayed in bold.
                  </p>
                </Row>
              </div>
            </div>
          </Container>
        </section>
      </section> */}
    </React.Fragment>
  );
};

export default News;
