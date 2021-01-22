import React, { Component } from "react";
import _ from "lodash";

// reactstrap components
import {
  Badge,
  Container,
  Row,
  Col,
  Table,
  UncontrolledTooltip,
  Button,
  Input,
} from "reactstrap";

class LunarCalendar extends Component {
  state = {
    configMoon: {
      lang: "en",
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      size: "100%",
      lightColor: "white",
      shadeColor: "black",
      texturize: true,
    },

    nameDay: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    nameMonth: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],

    phase: [],
    firstDayMonth: 0,
    daysMonth: 0,
    nextFullMoon: "",

    preMonth: 0,
    preYear: 0,

    yearRange: _.range(
      new Date().getFullYear() - 200,
      new Date().getFullYear() + 200
    ),
  };

  componentDidMount() {
    this.load_moon_phases(this.state.configMoon);
    this.setState({
      preMonth: this.state.configMoon.month,
      preYear: this.state.configMoon.year,
    });
  }
  componentDidUpdate() {
    //console.log("AAAAAAAAAAAAAAAA");
    if (
      this.state.preMonth !== this.state.configMoon.month ||
      this.state.preYear !== this.state.configMoon.year
    ) {
      this.load_moon_phases(this.state.configMoon);
      this.setState({
        preMonth: this.state.configMoon.month,
        preYear: this.state.configMoon.year,
      });
    }
    //console.log(this.state.phase);

    //console.log(reactHtml);
  }

  getColumnOfCalender() {
    const { firstDayMonth, daysMonth } = this.state;
    const totalCell = firstDayMonth + daysMonth - 1;
    const colums = Math.ceil(totalCell / 7);
    const columsArr = _.range(colums);
    //console.log(columsArr);
    return columsArr;
  }
  getDate(column, Day) {
    const date =
      column * 7 +
      this.state.nameDay.indexOf(Day) +
      2 -
      this.state.firstDayMonth;
    if (date > 0 && date <= this.state.daysMonth) {
      return date;
    } else {
      return "🌙";
      //return "***";
    }
  }
  getMoonPhase(date) {
    if (Number.isInteger(date)) {
      return this.htmlToReact(this.state.phase[date].svg);
    } else {
      return this.htmlToReact(
        '<i style="font-size: 1.5em;" class="tim-icons icon-planet">'
      );
    }
  }
  getSpecialPhase(date) {
    if (Number.isInteger(date)) {
      if (this.state.phase[date].isPhaseLimit) {
        return this.htmlToReact(this.state.phase[date].svgMini);
      }
    }
  }
  getTooltipOfDayInfo(date) {
    if (Number.isInteger(date)) {
      const { dis, lighting, phaseName, timeEvent } = this.state.phase[date];

      let info = `Phase Name : ${phaseName} <br/>`;
      info += `Lighting : ${Math.round(lighting)}% <br/>`;
      if (timeEvent) {
        info += `Event Time : ${tConvert(timeEvent)} <br/>`;
      }
      info += `Distance : ${Math.round(dis)}km `;
      //console.log(info);
      return this.htmlToReact(info);
    }
  }

  goNextMonth = () => {
    let configMoon = this.state.configMoon;
    configMoon.month += 1;
    if (configMoon.month === 13) {
      configMoon.month = 1;
      configMoon.year += 1;
    }
    console.log(configMoon);
    this.setState({ configMoon });
  };
  goPreviousMonth = () => {
    let configMoon = this.state.configMoon;
    configMoon.month -= 1;
    if (configMoon.month === 0) {
      configMoon.month = 12;
      configMoon.year -= 1;
    }
    console.log(configMoon);
    this.setState({ configMoon });
  };

  handleYearChange = (e) => {
    let configMoon = this.state.configMoon;
    configMoon.year = parseInt(e.target.value);
    this.setState({ configMoon });
  };

  isToday(day) {
    if (Number.isInteger(day)) {
      const thisYear = new Date().getFullYear();
      const thisMonth = new Date().getMonth() + 1;
      const thisDay = new Date().getDate();
      //console.log(today);
      if (
        thisDay === day &&
        this.state.configMoon.month === thisMonth &&
        this.state.configMoon.year === thisYear
      ) {
        return true;
      }
      return false;
    }
  }

  htmlToReact(html) {
    //var ReactDOMServer = require("react-dom/server");
    var HtmlToReactParser = require("html-to-react").Parser;
    var htmlInput = html;
    var htmlToReactParser = new HtmlToReactParser();
    var reactElement = htmlToReactParser.parse(htmlInput);
    //var reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);
    //console.log(reactHtml);
    return reactElement;
  }

  load_moon_phases = (obj) => {
    var gets = [];
    for (var i in obj) {
      gets.push(i + "=" + encodeURIComponent(obj[i]));
    }
    gets.push("LDZ=" + new Date(obj.year, obj.month - 1, 1) / 1000);
    var xmlhttp = new XMLHttpRequest();
    var url = "https://www.icalendar37.net/lunar/api/?" + gets.join("&");
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        //callback(JSON.parse(xmlhttp.responseText));
        const phase = JSON.parse(xmlhttp.responseText).phase;
        const firstDayMonth = parseInt(
          JSON.parse(xmlhttp.responseText).firstDayMonth
        );
        const daysMonth = parseInt(JSON.parse(xmlhttp.responseText).daysMonth);
        const nextFullMoon = JSON.parse(xmlhttp.responseText).nextFullMoon;
        //console.log(JSON.parse(xmlhttp.responseText));
        this.setState({ phase, firstDayMonth, daysMonth, nextFullMoon });
      }
    }.bind(this);
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  };

  render() {
    return (
      <div className="section section-pagination">
        <img
          alt="..."
          className="path"
          src={require("assets/img/path4.png").default}
        />
        <img
          alt="..."
          className="path path1"
          src={require("assets/img/path5.png").default}
        />

        <Container>
          <Row className="justify-content-md-center">
            <Col lg="1">
              <Button
                className="btn-round btn-icon float-left"
                size="lg"
                color="info"
                onClick={this.goPreviousMonth}
              >
                <i className="tim-icons icon-double-left" />
              </Button>
            </Col>
            <Col lg={{ size: "auto" }}>
              <Row>
                <Input
                  className="float-right"
                  color="info"
                  type="select"
                  name="year"
                  style={{ fontSize: "20px", textAlign: "center" }}
                  value={this.state.configMoon.year}
                  onChange={this.handleYearChange}
                >
                  {this.state.yearRange.map((year) => (
                    <option key={year} value={year} style={{ color: "black" }}>
                      {year}
                    </option>
                  ))}
                </Input>
              </Row>
              <Row>
                <h1 className="title my-2">
                  {this.state.nameMonth[this.state.configMoon.month - 1]}
                </h1>
              </Row>
            </Col>
            <Col lg="1">
              <Button
                className="btn-round btn-icon float-right"
                size="lg"
                color="info"
                onClick={this.goNextMonth}
              >
                <i className="tim-icons icon-double-right" />
              </Button>
            </Col>
          </Row>
          <Table className="container col-10">
            <thead>
              <tr>
                {this.state.nameDay.map((day) => (
                  <th key={day} className="text-center">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {this.getColumnOfCalender().map((r) => (
                <tr key={r}>
                  {this.state.nameDay.map((c) => (
                    <td
                      key={Math.floor(Math.random() * 100000)}
                      className="text-center"
                    >
                      <div className="container">
                        <div className="row">
                          <div
                            id={
                              Number.isInteger(this.getDate(r, c))
                                ? `day${this.getDate(r, c)}`
                                : null
                            }
                            style={({ width: "50px" }, { height: "50px" })}
                          >
                            {this.getMoonPhase(this.getDate(r, c))}
                          </div>

                          <div className="col align-self-start">
                            <Badge
                              color={
                                this.isToday(this.getDate(r, c))
                                  ? "primary"
                                  : "default"
                              }
                              pill
                            >
                              {this.getDate(r, c)}
                            </Badge>
                          </div>
                          <div
                            style={({ width: "20px" }, { height: "20px" })}
                            className="col align-self-end"
                          >
                            {this.getSpecialPhase(this.getDate(r, c))}
                          </div>
                        </div>
                        {Number.isInteger(this.getDate(r, c)) && (
                          <UncontrolledTooltip
                            placement="bottom"
                            target={
                              Number.isInteger(this.getDate(r, c)) &&
                              `day${this.getDate(r, c)}`
                            }
                            delay={0}
                          >
                            {this.getTooltipOfDayInfo(this.getDate(r, c))}
                          </UncontrolledTooltip>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default LunarCalendar;

function tConvert(time) {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ];

  if (time.length > 1) {
    // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(""); // return adjusted time or original string
}
