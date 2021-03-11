import React from "react";
import classnames from "classnames";
import {
  TabContent,
  TabPane,
  Container,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";



export default function Cards(){


    const [textTabs, setTextTabs] = React.useState(4);
    return(    
          <Container>
            <Card>
              
              <CardBody>
                <TabContent className="tab-space" activeTab={"link" + textTabs}>
                  <TabPane tabId="link4">
                    <p>
                      view section
                    </p>
                  </TabPane>
                  <TabPane tabId="link5">
                    <p>
                      comment section
                    </p>
                  </TabPane>
                  
                </TabContent>
              </CardBody>

              <CardHeader>
                <Nav className="nav-tabs-info" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 4,
                      })}
                      onClick={(e) => setTextTabs(4)}
                      href="#pablo"
                    >
                      View
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 5,
                      })}
                      onClick={(e) => setTextTabs(5)}
                      href="#pablo"
                    >
                      Comment
                    </NavLink>
                  </NavItem>
                  
                </Nav>
              </CardHeader>

            </Card>
          </Container>
        
    )

}
