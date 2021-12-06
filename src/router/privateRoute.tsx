import React from 'react'

import { Switch, Route, Redirect, useLocation } from 'react-router-dom'

import ReactDocumentTitle from 'react-document-title'

import App from '@/App'

import NotFound from '@/components/404'

import routerMap from '@/router/routerMap'

import { IRouterMap } from '@/router/types'

const RouteNotFound = () => {
  console.log('🍉🍉🍉🍉🍉🍉🍉')
  return <Redirect to={Object.assign({}, location, { state: { notFoundError: true } }) }></Redirect>
}

const recursiveRouters = (routeList: IRouterMap | undefined) => (
  Array.isArray(routeList) &&
  routeList.map((routeItem, index) => (
    <Route path={routeItem.path} key={index} exact={routeItem.exact} render={
      props => (
        <ReactDocumentTitle title={routeItem.meta.title}>
          <routeItem.component>
            {
              (routeItem.child || '')
              && <Switch>
                  {
                    recursiveRouters(routeItem.child)
                  }
                  <RouteNotFound />
                </Switch>
            }
          </routeItem.component>
        </ReactDocumentTitle>
      )
    }>
    </Route>
  ))
)


const PrivateRoute: React.FC = function () {
  return (
    <Route render={(props: any) => {
          console.log(props)
          const notFoundError = props.location.state?.notFoundError
          return (
            <App>
              {
                notFoundError ?
                <ReactDocumentTitle title='not found'>
                  <NotFound/>
                </ReactDocumentTitle> :
                <Switch>
                  {
                    recursiveRouters(routerMap)
                  }
                  <Route path="*" component={NotFound}/>
                </Switch>
              }
            </App>
          )
        }
      }>
    </Route>
  )
}

export default PrivateRoute
