module Link exposing (link)

import Html exposing (Html, a, text)

import Html.Attributes exposing (href)
import Html.Events exposing (onClick)

import Router.Route exposing (Route(..))
import Signal exposing (Signal(..))

link : List Signal -> Route -> String -> Html (List Signal)
link attrs route string =
  a [ href "javascript://"
    , onClick <| NavigateTo route
    :: attrs
    ]
    [ text string ]
