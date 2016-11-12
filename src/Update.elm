module Update exposing (update, urlParser, urlUpdate)

import Hop       exposing (outputFromPath)
import Hop.Types exposing (Address, Query)

import Navigation
import UrlParser exposing (parse)

import Model exposing (Model)
import Signal exposing (Signal(..))

import Router exposing (routerConfig)
import Router.Match exposing (matchers)
import Router.Route exposing (Route(..), resolve)

update : Signal -> Model -> (Model, Cmd Signal)
update signal model =
    case (Debug.log "signal" signal) of
        NavigateTo page ->
            let
                path    = resolve page
                command = Navigation.newUrl <| outputFromPath routerConfig path
            in
                ( model, command )

urlParser : Navigation.Parser ( Route, Address )
urlParser =
    let
        parsePath path =
            path
                |> parse identity Router.Match.matchers
                |> Result.withDefault NotFound

        resolver = Hop.makeResolver routerConfig parsePath
    in
        Navigation.makeParser (.href >> resolver)

urlUpdate : (Route, Address) -> Model -> (Model, Cmd Signal)
urlUpdate (route, address) model =
    ( { model | route = route, address = address }
    , Cmd.none
    )
