/**
 * Create an Observable from a History object.
 */

import {
  Action,
  History,
  Location,
  LocationListener,
  UnregisterCallback
} from "history";
import { fromEventPattern, Observable } from "rxjs";

export function fromHistory<LocationState>(
  history: History
): Observable<[Location<LocationState>, Action]> {
  let unregisterCallback: UnregisterCallback;

  function addHandler(handler: LocationListener): void {
    unregisterCallback = history.listen(handler);
    handler(history.location, history.action);
  }

  function removeHandler(): void {
    if (unregisterCallback) {
      unregisterCallback();
    }
  }

  return fromEventPattern<[Location<LocationState>, Action]>(
    addHandler,
    removeHandler
  );
}
