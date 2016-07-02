module Update exposing (update, urlParser, urlUpdate)

import Navigation
import Hop exposing (makeUrl, makeUrlFromLocation, matchUrl, setQuery)
import Hop.Types exposing (Query, Location)

import Model exposing (Model)
import Signal exposing (Signal(..))

import Router exposing (routerConfig)
import Router.Route exposing (Route(..), resolve)

update : Signal -> Model -> (Model, Cmd Signal)
update msg model =
  case (Debug.log "msg" msg) of
     NavigateTo route ->
       let command = Navigation.newUrl <| makeUrl routerConfig <| resolve route
         in (model, command)

urlParser : Navigation.Parser (Route, Hop.Types.Location)
urlParser = Navigation.makeParser (.href >> matchUrl routerConfig)

urlUpdate : (Route, Location) -> Model -> (Model, Cmd Signal)
urlUpdate (route, location) model =
  ( { model | route    = route
            , location = location
    }
  , Cmd.none
  )
