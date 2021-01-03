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
const ThumbnailList: React.FC = () => {
  const tempArray = ['a', 'b', 'c', 'd', 'e']
  return (
    <List>
      {tempArray.map((temp, index) =>
        <li key={`${temp}_${index}`}>
          <ListItemImage />
        </li>
      )}
    </List>
  )
}
export default ThumbnailList