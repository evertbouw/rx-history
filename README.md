# fromHistory

Create an Observable from a History object.

```ts
import { createBrowserHistory } from "history";
import { fromHistory } from "rx-history";

const history = createBrowserHistory();
const location$ = fromHistory(history);

location$.subscribe(([location, action]) => {
  console.log("Path change!", location.pathname, action);
});
```
