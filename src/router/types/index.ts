import React from "react";

interface IMeta {
  title: string
}

export interface IRouterItem {
  path: string,
  name: string,
  meta: IMeta,
  exact?: boolean,
  component: React.FC,
  child?: IRouterItem[]
}

export type IRouterMap = IRouterItem[]