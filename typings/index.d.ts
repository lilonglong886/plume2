import { Map } from 'immutable'
import * as React from 'react'
import * as mitt from 'mitt'

export = plume2

declare namespace plume2 {
  type Dispatch = () => void;
  type RollBack = () => void;

  export type IMap = Map<string, any>
  export type Handler = (state: IMap) => void;

  export interface IOptions {
    debug?: boolean;
  }

  export class Actor {
    defaultState(): Object;
  }

  export class Store {
    constructor(props?: IOptions);
    dispatch(msg: string, params?: any): void;
    transaction(dispatch: Dispatch, rollBack?: RollBack): boolean;
    bindActor(): Array<Actor>;
    bigQuery(ql: QueryLang): any;
    state(): IMap;
    subscribe(cb: Handler): void;
    unsubscribe(cb: Handler): void;
  }

  export class QueryLang {
    constructor(name: string, lang: Array<any>);
    id(): number;
    name(): string;
    lang(): Array<any>;
  }

  export function QL(
    name: string,
    lang: Array<any>
  ): QueryLang;

  export const msg: mitt.Emitter;

  export function Action(msg: string): Function;

  export function Relax<TFunction extends React.ComponentClass<any>>(
    target: TFunction
  ): TFunction;

  type TStore = typeof Store
  type Wrapper<IProps> = React.ComponentClass<IProps>;

  export function StoreProvider<TFunction extends React.ComponentClass<any>>(
    AppStore: TStore,
    opts?: IOptions
  ): (Base: TFunction) => any;
}