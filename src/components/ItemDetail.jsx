import ItemCount from './ItemCount'

function ItemDetail({ detail }) {
  return (
    <div>
      <h2>{detail?.title}</h2>
      <img src={detail?.image} style={{ width: 300 }} />
      <p>{detail?.description}</p>
      <p>{detail?.price}</p>
      <ItemCount detail={detail} />
    </div>
  )
}

export default ItemDetail