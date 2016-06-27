module Update exposing (update, urlParser, urlUpdate)

import Navigation
import Hop exposing (makeUrl, makeUrlFromLocation, matchUrl, setQuery)
import Hop.Types exposing (Query, Location)

import Model exposing (Model)
import Action exposing (Action(..))
import Router exposing (routerConfig, Route(..))

update : Action -> Model -> (Model, Cmd Action)
update msg model =
  case (Debug.log "msg" msg) of
     NavigateTo path ->
       let command = Navigation.newUrl <| makeUrl routerConfig path
         in (model, command)

     SetQuery query ->
       let command =
         model.location
           |> setQuery query
           |> makeUrlFromLocation routerConfig
           |> Navigation.newUrl
         in (model, command)

urlParser : Navigation.Parser (Route, Hop.Types.Location)
urlParser = Navigation.makeParser (.href >> matchUrl routerConfig)

urlUpdate : (Route, Location) -> Model -> (Model, Cmd Action)
urlUpdate (route, location) model =
  ( { model | route    = route
            , location = location
    }
  , Cmd.none
  )
