module View exposing (view)

import Html exposing (Html, body, section, h1, h2, p, text)

import Model exposing (Model)
import Router.Route exposing (Route(..))
import Signal exposing (Signal(..))

view : Model -> Html Signal
view model =
  section [] [ pageView model ]

showTop : Model -> Html Signal
showTop  model =
  section [] [ h2 [] [ text "showTop" ] ]

showBody : Model -> Html Signal
showBody model =
  section [] [ h2 [] [ text "showBody" ] ]

pageView : Model -> Html Signal
pageView model =
  case model.route of
    Home      -> showTop  model
    Code      -> showBody model
    Design    -> showBody model
    About     -> showBody model
    Contact   -> showBody model
    Portfolio -> showBody model
    NotFound  -> h2 [] [text "Not Found"]
