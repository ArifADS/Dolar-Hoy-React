import "./css/style.css"
import React from "react";
import { render } from "react-dom";
import PricesList from "./components/PricesList"
import Chart from "./components/Chart"
import { Grid, Row, Col } from 'react-bootstrap'
import axios from 'axios';
import moment from 'moment'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = { precios: [], date: null }
    }

    async getPrices() {
        let { data } = await axios.get("https://dolarhoy.herokuapp.com/dolar");
        this.setState({ precios: data.precios, date: data.date * 1000 })
    }

    async componentDidMount() {
        this.getPrices()
    }


    render() {
        let { date, precios } = this.state;
        let dateStr = moment(date).format('llll');
        return (
            <Grid>
                <Row>
                    <Col xs={6} xsOffset={6}>
                        <p className="date">{dateStr}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <PricesList prices={precios} />
                    </Col>
                    <Col md={8}>
                        <Chart />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

render(<App />, document.getElementById("app"));