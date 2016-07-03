module View exposing (view)

import Html exposing (Html)

import Model exposing (Model)
import Router.Route exposing (Route(..))
import Signal exposing (Signal(..))

import View.Component.Head exposing (head)
import View.Component.Foot exposing (foot)

import View.Page exposing (page)
import View.Style.Class exposing (Class(..), class)

view : Model -> Html Signal
view model =
  section [class [FillPage]]
    [ head
    , page model.route
    , foot
    ]
