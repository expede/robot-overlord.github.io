module Update exposing (update, urlParser, urlUpdate)

import Navigation
import Hop exposing (outputFromPath)
import Hop.Types exposing (Address, Query)

import Model exposing (Model)
import Signal exposing (Signal(..))

import Router exposing (routerConfig)
import Router.Match exposing (matchers)
import Router.Route exposing (Route(..), resolve)

import UrlParser exposing (parse)

update : Signal -> Model -> (Model, Cmd Signal)
update signal model =
    case (Debug.log "msg" signal) of
        NavigateTo path ->
            (model, Navigation.newUrl <| outputFromPath routerConfig path)

urlParser : Navigation.Parser (Route, Address)
urlParser =
    let
        parse path =
            path
                |> parse identity Router.Match.matchers
                |> Result.withDefault NotFound

        resolver = Hop.makeResolver routerConfig parse
    in
        Navigation.makeParser (.href >> resolver)

urlUpdate : (Route, Address) -> Model -> (Model, Cmd Signal)
urlUpdate (route, address) model =
    ( { model | route = route, address = address }
    , Cmd.none
    )
