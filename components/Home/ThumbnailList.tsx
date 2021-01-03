import styled from '@emotion/styled'

const List = styled.ul`
  display: flex;
  list-style: none;
  margin-right: -20px;
  li {
    width: 200px;
    margin-right: 20px;
  }
`
const ListItemImage = styled.div`
  overflow: hidden;
  background: #dddddd;
  width: 200px;
  height: 200px;
`

// TODO データ仮入れなのでfetchできるようになったら直す
const ThumbnailList: React.FC = () => (
  <List>
    <li>
      <ListItemImage />
    </li>
    <li>
      <ListItemImage />
    </li>
    <li>
      <ListItemImage />
    </li>
    <li>
      <ListItemImage />
    </li>
  </List>
)
export default ThumbnailList