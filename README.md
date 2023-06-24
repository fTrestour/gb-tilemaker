This is a small project to test what SolidJS feels like.

The project was setup with [SolidStart](https://start.solidjs.com/getting-started/what-is-solidstart) but in the end I didn't use the API and routing features the framework provides.

Overall, it's pretty close to React, but the signals pattern make some tasks lighter. For instance, the `CopyButton` logic would have to be embedded in a `useEffect`.

Deploying through Vercel with an adapter is pretty convenient. The deployed version can be visited [here](https://gb-tilemaker.vercel.app/)

I used `solid-styled-components` for styling to keep the amount of things to learn under control. But it doesn't seem to integrate well with SSR and makes the app blink when the page hydrates.
