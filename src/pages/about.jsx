import { createEffect, createSignal } from "solid-js"

export default (router) => {
  const [name, setName] = createSignal(router?.params?.name)

  function model(el, value) {
    const [field, setField] = value();
    createEffect(() => el.value = field() || '');
    el.addEventListener("input", e => setField(e.target.value));
  }

  createEffect(() => {
    document.title = 'About ' + (name() || 'Page')
  })

  return (
    <div className="container">
      <h1 className="title">About {router?.params?.name || 'Page'}</h1>
      <p>
        Change name: <br/>
        <input type="text" use:model={[name, setName]} />
      </p>
      <p>
        Nice, routing is working! Back to <a href="/">Homepage</a>
      </p>
    </div>
  )
}