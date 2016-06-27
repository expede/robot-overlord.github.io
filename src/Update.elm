module Update exposing (update, urlParser, urlUpdate)

import Navigation
import Hop exposing (makeUrl, makeUrlFromLocation, matchUrl, setQuery)
import Hop.Types exposing (Query, Location)

import Model exposing (Model)
import Msg exposing (Msg(..))
import Router exposing (routerConfig, Route(..))

update : Msg -> Model -> (Model, Cmd Msg)
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

urlUpdate : (Route, Location) -> Model -> (Model, Cmd Msg)
urlUpdate (route, location) model =
  ( { model | route    = route
            , location = location
    }
  , Cmd.none
  )
