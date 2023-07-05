import 'pinia'

declare module 'pinia' {
  type EntityStateData<S> = S['entityStateData']
  export interface PiniaCustomProperties<Id, S, G, A> {
    entityStateData: EntityStateData<S>,
    loading: boolean,
    error: Error | null,

    getLoading: () => boolean

    getError: () => Error | null

    hasId: () => boolean

    setEntityStateData: (entityStateData: EntityStateData<S>) => void

    setEntityStateDataPromise(promise: Promise<EntityStateData<S>>): Promise<void>
  }
}
