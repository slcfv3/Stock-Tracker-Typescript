import React from "react";
import { SectionTitle, PeerSymbol } from '../styled-components/text'
import { BlueLine } from '../styled-components/lines'
import { Row, Col } from '../styled-components/wrappers'
import {PeerProp} from '../reducers/types'

const Peers = (props:PeerProp) => {
    const peer = ["MSFT", "AMZN", "TWTR", "VOD", "GOOG"]
    return (
        <div className="peers">
            <SectionTitle>TOP PEERS</SectionTitle>
            <BlueLine marginBottom='0px'/>
            <Row columnGap='5%' marginTop='14px'>
                {peer.map((item, index) =>
                    <Col>
                        <PeerSymbol breakpoint={props.breakpoint}> {item} </PeerSymbol>
                    </Col>
                )}
            </Row>
        </div>
    );
}

export default Peers;