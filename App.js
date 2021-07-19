import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Table,
  Search,
  Label,
  Menu,
  Icon,
  Container,
  Grid,
  Feed,
  List
} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
      <br/>
      <Container>
      <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="3" textAlign="right">
          <Search placeholder="Search document..."/>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    <Table.Header>
      <Table.Row textAlign="center">
        <Table.HeaderCell colSpan="2">Nama Document</Table.HeaderCell>
        <Table.HeaderCell>Jenis File</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell colSpan="2" positive>
          <Label ribbon>Panduan Belajar Javascript</Label>
        </Table.Cell>
        <Table.Cell textAlign="center">PDF</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell colSpan="2">Panduan Belajar CSS</Table.Cell>
        <Table.Cell textAlign="center">PDF</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell colSpan="2">Panduan Belajar React JS</Table.Cell>
        <Table.Cell textAlign="center">PDF</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
<br/>
<Grid columns={4}>
  <Grid.Column>
  <Feed>
    <Feed.Event>
      <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      <Feed.Content>
      <Feed.Summary>
        <Feed.User>Anton</Feed.User> added you as a friend
        <Feed.Date>3 Hour Ago</Feed.Date>
      </Feed.Summary>
      <Feed.Meta>
        <Feed.Like>
          <Icon name='like' />4 Likes
        </Feed.Like>
      </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
    <Feed.Event>
      <Feed.Label icon="pencil" />
      <Feed.Content>
      <Feed.Summary>
        You submitted a new post to the page <br/>
        <Feed.Date>3 days ago</Feed.Date>
        <Feed.Extra text>Saya Senang Belajar Bahasa Pemrograman</Feed.Extra>
        <Feed.Date>11 Likes</Feed.Date>
      </Feed.Summary>
      </Feed.Content>
    </Feed.Event>
    <Feed.Event>
      <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
      <Feed.Content>
        <Feed.Date>4 days ago</Feed.Date>
        <Feed.Summary>
          David added 2 new Image
        </Feed.Summary>
        <Feed.Extra images>
          <a>
            <img src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' />
          </a>
          <a>
            <img src='https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png' />
          </a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />2 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  </Feed>
  </Grid.Column>
  <Grid.Column></Grid.Column>
  <Grid.Column></Grid.Column>
  
  <Grid.Column>
  <List>
  <List.Item>
  <List.Content>
    <h3>Website Terkait</h3>
  </List.Content>
</List.Item>
<List.Item>
  <List.Icon name='linkify' />
  <List.Content>
    <a href='http://www.google.com'>Google</a>
  </List.Content>
</List.Item>
<List.Item>
   <List.Icon name='linkify' />
   <List.Content>
     <a href='http://www.facebook.com'>Facebook</a>
   </List.Content>
 </List.Item>
 <List.Item>
    <List.Icon name='linkify' />
    <List.Content>
      <a href='http://www.semantic-ui.com'>Semantic UI</a>
    </List.Content>
  </List.Item>
  <List.Item>
     <List.Icon name='linkify' />
     <List.Content>
       <a href='http://www.niomic.com'>Niomic</a>
     </List.Content>
   </List.Item>
   <List.Item>
      <List.Icon name='linkify' />
      <List.Content>
        <a href='http://www.react.com'>React</a>
      </List.Content>
    </List.Item>
</List>
  </Grid.Column>
</Grid>
  </Container>
  </div>
    );
  }
}

export default App;
