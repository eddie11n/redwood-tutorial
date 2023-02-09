import { Loading, Empty, Failure, Success } from './CommentsCell'
import { standard } from './CommentsCell.mock'

export const loading = () => {
  return Loading ? <Loading /> : <></>
}

export const empty = () => {
  return Empty ? <Empty /> : <></>
}

export const failure = (args) =>
  Failure ? <Failure error={new Error('Oh no')} {...args} /> : <></>

export const success = (args) =>
  Success ? <Success {...standard()} {...args} /> : <></>

export default { title: 'Cells/CommentsCell' }
