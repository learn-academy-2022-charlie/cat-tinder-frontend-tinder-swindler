import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap'

export default class Animeindex extends Component {
  render() {
    return (
     <>
        <h1 className='indexHeader'>Here are all the Waifu's</h1>

          <div>
            <Card>
              <CardBody>
                <CardTitle tag="h5">
                  Card title
                </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6">
                    Card subtitle
                  </CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CardText>
                  <Button>
                    Button
                  </Button>
              </CardBody>
            </Card>
          </div>

     </>
    )
  }
}
