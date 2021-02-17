export default function ({ redirect, store }) {
  const username = store.state.username
  if (!username) {
    return redirect('/chat')
  }
}
